<template>
  <div id="contenu">
    <div id="contenu-projets-page">
        <span>
        <h2>Ghibli Awwwards</h2>
            <h4>Client:</h4>
            <p>
                Mon école IIM (Institut de l'Internet et du Multimédia).
            </p>

            <h4>BAP:</h4>
            <p>
                Pour cette BAP (Bourse Aux Projets), j'étais en tant que technicien développeur web. L'objectif était de faire un site pour les Awwwards.
            </p><br/>

            <h4>Exemple de maquettes pour le site:</h4>
        </span>

      <div id="caroussel">
        <img src="@/assets/projets/ghibli/maquettes/Accueil.jpg" alt="" id="caroussel-img_1plan">
        <div class="caroussel-preview">
          <img src="@/assets/projets/ghibli/maquettes/Accueil.jpg" alt="" class="img_preview" id="img_preview-selected">
          <img src="@/assets/projets/ghibli/maquettes/Chateu-Ciel.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Totoro.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Luciole.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Kiki.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Souvenirs.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Mononoke.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Royaume.jpg" alt="" class="img_preview">
          <img src="@/assets/projets/ghibli/maquettes/Retraire.jpg" alt="" class="img_preview">
        </div>
      </div>

      <span>
            <h4>Vidéo de la réalisation:</h4>
        </span>
      <video controls>
        <source src="@/assets/projets/ghibli/ghibli-video.mp4" type="video/mp4">
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

