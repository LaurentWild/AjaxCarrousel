$(document).ready(function(){
  // INIT TAB IMAGES
  let imgsTab = [];
  // JSON
  $.getJSON('imgs.json', function (data) {
    let it = 0;
    for(item of data) {
      imgsTab[it] = item.src;
    console.log(imgsTab);
    it++;
    }
    // SI YA BIEN DES IMAGES
    if(imgsTab.length > 0) {
      // MONTRE LA DERNIERE IMAGE
      displayImg(imgsTab.length - 1);
      // FONCTION CARROUSEL
      function carrousel(i){
          // TOUTES LES 3 SECONDES
          setTimeout(function(){
            // SI PLUS D IMAGE => RETOUR A 0
            if(i === (imgsTab.length - 1)) i = 0;
            // AFFICHE L IMAGE EN COURS
            displayImg(i);
            // RELANCE LE CARROUSEL
            carrousel(i + 1); // relance la fonction
          }, 3000);
      }
      // DEMARRE CARROUSEL AVEC IMAGE 1
      carrousel(0);
    }
  });

  // AFFICHAGE DES IMAGES
  function displayImg(id){
    // VIDE LE CARROUSEL
    $("#carrousel").html("");
    // MET L IMAGE QUI VA BIEN AVEC LES FLECHES
    $("#carrousel").append(
      $("<img/>").attr("class", "img").attr("src", imgsTab[id]).fadeIn(500),
        $("<span/>").attr("id", "nav1").text("<"),
        $("<span/>").attr("id", "nav2").text(">")
    );
    // CLIC PREMIERE FLECHE
    $("#nav1").bind( "click", function() {
      let j = id - 1;
      if(id === 0) j = 3;
      displayImg(j);
    });
    //CLIC DEUXIEME FLECHE
    $("#nav2").bind( "click", function() {
      let j = id + 1;
      if(id === 3) j = 0;
      displayImg(j);
    });
  }
});
