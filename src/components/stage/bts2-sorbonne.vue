<template>
  <div id="contenu">
    <div id="contenu-stage-page">
        <span>
            <h2>Stage BTS 2e année - Sorbone</h2>
            <h4>Présentation de l'entreprise:</h4>
            <p>
                J'ai eu l’opportunité d’effectuer à nouveau un stage au sein de l'Université Pierre et Marie Curie (UPMC), qui a été fusionné avec l’Université Paris-Sorbonne pour former Sorbonne Université dès le 1er janvier 2018.
            </p>
        </span>

      <span>
            <h4>Présentation de mes activités:</h4>
            <p>
                Des télévisions mises en place dans l'Université permettent de diffuser des informations. Ces dernières sont diffusées grâce à un système d'images créées sur Photoshop.
                La création d'images est réalisée par IrisTV.<br/>
                Toutefois, ce dernier requiert :
            <ul>
                <ol>- D’avoir la licence payante de Photoshop</ol>
                <ol>- De savoir maîtriser Photoshop</ol>
            </ul>
            Pour simplifier le processus de création d’images utilisable par tout le monde, il m'a été confié de créer des pages Web qui permettront de sélectionner et
            de modifier des «templates» (modèles/maquettes) existants. Afin de réaliser une base, j’ai au préalable étudié et répertorié les modèles existant,
            afin d'en faire des maquettes sur <B>Balsamiq Mockups</B>.
        </p>
        </span>

      <div style="display: flex; align-items: center;flex-direction: column;">
        <p>Exemples de maquettes réalisées</p>
        <div class="img-flex">
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/balsamiq1.jpg" style="width: 100%;">
          </div>
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/balsamiq4.jpg" style="width: 100%;">
          </div>
        </div>
      </div>

      <span>
            <p>
            Nous avons défini un <B>"Persona"</B> (personne fictive qui représente un groupe cible), ce qui nous permet de savoir pour quelle catégorie de personnes le projet sera utilisé,
            en vue d'améliorer l'ergonomie du projet.
            </p>
            <p>
                Avant de commencer à tout développer, j'ai cherché si des solutions susceptibles de nous aider existaient.
                Plusieurs solutions ont été trouvées, dont la librairie <B>PHP-GD</B> et les libraires JavaScript <B>html2canvas</B> & <B>Canvas2image</B>.<br/>
                Nous avons opté pour les librairies JavaScript html2canvas & Canvas2image, étant donné que le projet sera uniquement composé de HTML, CSS et JavaScript,
                cela permet ainsi d'utiliser le projet sans avoir un serveur web ou même une connexion internet, sachant que ce dernier peut également être copié et utilisable depuis une clé USB,
                ce qui facilite son usage.
            </p>
        </span>

      <div style="display: flex; align-items: center;flex-direction: column;">
        <p>Deux des huit templates réalisés</p>
        <div class="img-flex">
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/template1.png" style="width: 90%;">
          </div>
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/template2.png" style="width: 90%;">
          </div>
        </div>
      </div>

      <span>
            <p>
                Après avoir réalisé des templates pour tous, nous avons envoyé un mail à IrisTV, afin qu'ils testent eux-mêmes le projet. Nous avons donc convenu d’un rendez-vous avec eux. Au cours de ce rendez-vous, les personnes d’IrisTV ont pu voir l'avancement du projet, la réalisation des template. Nous avons pu échanger des idées, apporter des modifications. Nous leur avons précisés que seuls deux templates seront retenus, car ils permettront de remplir les besoins de la charte graphique.<br/>
                À l’issue de cette réunion, IrisTV nous a envoyés un document qui m'a permis de connaitre comment les deux templates seront réalisés.
            </p>
        </span>

      <div style="display: flex; align-items: center;flex-direction: column;">
        <p>Deux des huit templates réalisés</p>
        <div class="img-flex">
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/Iristv-Maquette1.png" style="width: 90%;">
          </div>
          <div style="text-align: center;">
            <img src="@/assets/stage/bts2-sorbonne/Iristv-Maquette2.png" style="width: 90%;">
          </div>
        </div>
      </div>

      <span>
            <p>
                Je me suis donc inspiré des deux templates envoyés par IrisTV. Du fait que l'un des deux templates implique une image, il nous fallait un moyen pour que l'utilisateur puisse modifier son image facilement.
                J'ai ainsi trouvé la librairie JavaScript <B>Cropper.js</B> qui permettait de répondre au besoin.<br/>
                Après avoir réalisé les templates et utilisé Cropper.js pour modifier l'image, j'ai travaillé sur l'aspect ergonomique du projet afin de simplifier son utilisation et sa compréhension.
            </p>
        </span>

      <div id="caroussel" style="text-align: center;">
        <p>Résultat final du projet</p>
        <img src="@/assets/stage/bts2-sorbonne/finalUser1.png" alt="" id="caroussel-img_1plan">
        <div class="caroussel-preview">
          <img src="@/assets/stage/bts2-sorbonne/finalUser1.png" alt="" class="img_preview" id="img_preview-selected">
          <img src="@/assets/stage/bts2-sorbonne/finalUser2.png" alt="" class="img_preview">
          <img src="@/assets/stage/bts2-sorbonne/finalUser3.png" alt="" class="img_preview">
          <img src="@/assets/stage/bts2-sorbonne/finalUser4.png" alt="" class="img_preview">
        </div>
      </div>

      <span>
            <h4>Conclusion:</h4>
            <p>
                Le stage de ma 2nde année de BTS a été effectué, tout comme celui de ma 1ère année, au sein du Service intitulé «L’Usage des Technologies Éducatives en Sciences » (L’UTES) de Sorbonne Université.
                Il m’a permis de continuer à évoluer au sein d’une équipe d’Informaticiens, qui ont su m’encadrer, m’ont permis d’être autonome, de prendre des initiatives, et d’acquérir et d’approfondir des connaissances informatiques.
                J’ai également eu l’opportunité de participer à des réunions/groupes de travail.
            </p>
        </span>

      <span>
            <h4>Vidéo de la réalisation:</h4>
        </span>
      <p>Video</p>
<!--      <video controls muted>-->
<!--        <source src="@/assets/stage/bts2-sorbonne/bts2_stage-realisation.mp4" type="video/mp4">-->
<!--      </video>-->
    </div>
  </div>
</template>

<script>
export default { }

document.body.onload = function() {
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

