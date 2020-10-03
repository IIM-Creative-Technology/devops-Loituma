<template>
  <div id="contenu">
    <div id="contenu-stage-page">
        <span>
            <h2>Stage BTS 1er année - UPMC</h2>
            <h4>Présentation de l'entreprise:</h4>
            <p>
                L’Université Pierre et Marie CURIE (UPMC) est un Établissement faisant partie du PRES « Sorbonne Universités » qui associe également :
            </p>
            <ul>
                <ol> ➢ L’Université Paris-Sorbonne (Paris 4)</ol>
                <ol> ➢ L’Université Technologique de Compiègne (UTC)</ol>
                <ol> ➢ Le Muséum National d’Histoire Naturelle (MNHN).</ol>
            </ul>
            <p>
                L’UPMC est un Établissement Public à caractère Scientifique, Culturel et Professionnel (EPSCP).<br>
            À ce jour, l’UPMC emploie 6 000 personnes employées, accueille 31 000 étudiants et plus de
            3 000 Personnels issus d’autres Établissements.<br>
            Dès le 1er janvier 2018, l’UPMC va fusionner avec l’Université Paris-Sorbonne pour devenir
            Sorbonne Université.
            </p>
        </span>

      <div style="text-align: center; margin-bottom: 15px;">
        <img src="@/assets/stage/bts1-upmc/organisation.png" style="width: 70%;">
      </div>

      <span>
            <h4>Présentation de mes activités:</h4>
            <p>
                J’ai occupé un poste de Développeur stagiaire pour réaliser un formulaire en ligne et une basede données. J’ai été encadré par un Assistant-Ingénieur.<br/>
                Le but étant de refaire un formulaire de réservation de salle car la base de données déjà faite était de taille trop importante et certaines tables n’était plus utilisées.<br/>
                Afin de pouvoir visualisé la base de données déjà existante j’ai effectué du <B>Reverse Engineering</B> et de la modélisation de la nouvelle base de données avec <B>MySQL Workbench</B>.
            </p>
        </span>

      <div style="text-align: center; margin-bottom: 15px;">
        <p>Ancienne base de données</p>
        <img src="@/assets/stage/bts1-upmc/bd-ancien.png" style="width: 70%;">
        <p>Nouvelle base de données</p>
        <img src="@/assets/stage/bts1-upmc/bd-nouveau.png" style="width: 80%;">
      </div>

      <span>
        <p>
          La demande sur la mise à jour du formulaire est :
          <ul>
            <ol>- Le formulaire soit plus intuitif et plus simple d’utilisation</ol>
            <ol>- Le formulaire soit plus clair et plus attractif</ol>
            <ol>- Contrôle des champs</ol>
          </ul>
          Pour cela j'ai intégré des <B>DatePicker</B> et des <B>ClockPicker</B> afin de formater la saisie des dates et des heures.
        </p>
      </span>

      <div style="display: flex; align-items: center;">
        <div style="text-align: center; margin-bottom: 15px;">
          <img src="@/assets/stage/bts1-upmc/clockpicker.png" style="width: 65%;">
          <p>ClockPicker</p>
        </div>
        <div style="text-align: center; margin-bottom: 15px;">
          <img src="@/assets/stage/bts1-upmc/datapicker.png" style="width: 65%;">
          <p>DataPicker</p>
        </div>
      </div>

      <span>
            <p>
            Puis j'ai appris le <B>JQuery</B> afin de cloner le formulaire pour que l'utilisateur puisse réserver plusieurs salle à des dates différentes et donc cela simplifiait
            le code source, mais aussi a cacher/montrer certains champs selon le choix de l'utilisateur sur la période de réservation.
            </p>
        </span>

      <div style="text-align: center; margin-bottom: 15px;">
        <img src="@/assets/stage/bts1-upmc/formulaire.png" style="width: 70%;">
      </div>

      <span>
            Il fallait à la fin génerer un pdf de la réservation j'ai donc appris à utiliser la librairie <B>HTML2PDF</B>.<br/>
            Afin d'organiser la façon de procéder et l'ordre des choses j'ai appris les méthodes agiles plus précisément la méthode <b>SCRUM</b>
            avec des réunion au début de chaque semaine (SPRINT) afin de voir ce que l’on va faire durant cette semaine précise et ainsi faire une liste des éléments prioritaires.<br/>
            Puis tous les matins ont fait un SCRUM Meeting de 15min qui se fait debout et si possible dans une autre salle afin de voir ce qui a été terminé, ce que l’on va faire et quels obstacles nous retardent.
        </span>

    </div>
  </div>
</template>

<script>
export default { }
</script>

