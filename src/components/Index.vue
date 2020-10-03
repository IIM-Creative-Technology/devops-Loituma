<template>
  <div id="contenu">
    <div class="rect-section">
      <router-link to="/projets">
        <div class="rect-section-text"><p>Projects</p></div>
        <div class="rect-section-img"><img src="@/assets/projets.png"/></div>
      </router-link>
    </div>

    <div class="rect-section">
      <router-link to="/stage">
        <div class="rect-section-img"><img src="@/assets/stage.png"/></div>
        <div class="rect-section-text"><p>Stage</p></div>
      </router-link>
    </div>

    <div class="rect-section">
      <router-link to="/about">
        <div class="rect-section-text"><p>A Propos</p></div>
        <div class="rect-section-img" style="background-color: #000000"><img src="@/assets/about.gif"/></div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default { }
</script>
