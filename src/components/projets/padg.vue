<template>
  <div id="contenu">
    <div id="contenu-projets-page">
        <span>
        <h2>Portoflio PADG</h2>
            <h4>Client:</h4>
            <p>
                Pierre Alain De Guarrigues est un comédien de voix off, il a plus de 30 ans de carrière, 45 000 enregistrements et travaillant dans le monde de la pub, cinéma d'animation, jeux vidéo.
            </p>

            <h4>BAP:</h4>
            <p>
                Pour cette BAP (Bourse Aux Projets), j'étais en tant que technicien développeur web remplacent, car leur ancien développeur étant parti j'ai pris la place et eu une semaine pour réaliser ce projet de portfolio.
            </p><br/>

            <h4>Exemple de maquettes pour le site:</h4>
        </span>

      <div id="caroussel">
        <img src="@/assets/projets/padg/maquettes/page_accueil.jpg" alt="" id="caroussel-img_1plan">
        <div class="caroussel-preview">
          <img v-on:click="caroussel" src="@/assets/projets/padg/maquettes/page_accueil.jpg" alt="" class="img_preview" id="img_preview-selected">
          <img v-on:click="caroussel" src="@/assets/projets/padg/maquettes/page_voix.jpg" alt="" class="img_preview">
          <img v-on:click="caroussel" src="@/assets/projets/padg/maquettes/page_image.jpg" alt="" class="img_preview">
          <img v-on:click="caroussel" src="@/assets/projets/padg/maquettes/page_vidéos.jpg" alt="" class="img_preview">
          <img v-on:click="caroussel" src="@/assets/projets/padg/maquettes/page_contact.jpg" alt="" class="img_preview">
        </div>
      </div>

      <span>
            <h4>Vidéo de la réalisation:</h4>
        </span>
      <video controls muted>
        <source src="@/assets/projets/padg/padg-video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default { }

document.body.onclick = function() {
  const imgPreview = document.getElementsByClassName("img_preview");
  const img1Plan = document.getElementById("caroussel-img_1plan");
  for (var i = 0; i < imgPreview.length; ++i) {
    imgPreview[i].onclick = function() {
      for (var y = 0; y < imgPreview.length; ++y) {
        imgPreview[y].removeAttribute('id');
      }
      img1Plan.src = this.src;
      img1Plan.alt = this.alt;
      this.id = "img_preview-selected";
    };
  }
}
</script>

