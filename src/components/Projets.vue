<template>
  <div id="contenu">
    <div id="contenu-projets">
      <div class="rect-section-mini">
        <router-link :to="{name: 'projets-padg'}">
          <div class="rect-section-mini-text"><span class="mini-text-left">Portfolio<br/> PADG</span></div>
          <div class="rect-section-mini-img" style="background-color: #000000"><img src="@/assets/projets/padg/padg-icon2.png"/></div>
        </router-link>
      </div>

      <div class="rect-section-mini">
        <router-link :to="{name: 'projets-ghibli'}">
          <div class="rect-section-mini-img" style="background-color: black;"><img width="70%" src="@/assets/projets/ghibli/awwwards-ghibli.gif"/></div>
          <div class="rect-section-mini-text"><span class="mini-text-right">Awwwards <br/> Studio Ghibli</span></div>
        </router-link>
      </div>

      <div class="rect-section-mini">
        <router-link :to="{name: 'projets-csharp'}">
          <div class="rect-section-mini-text"><span class="mini-text-left">C# Terminal<br/> Game</span></div>
          <div class="rect-section-mini-img" style="background-color: #000000"><img src="@/assets/projets/csharp-game/csharp-logo.png" style="width: 68%"/></div>
        </router-link>
      </div>

      <div class="rect-section-mini">
        <router-link :to="{name: 'projets-elfamosodevis'}">
          <div class="rect-section-mini-img" style="background-color: black;"><img width="70%" src="@/assets/projets/elfamosodevis/elfamosodevis-icon.png"/></div>
          <div class="rect-section-mini-text"><span class="mini-text-right">ElFamosoDevis</span></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default { }
</script>

