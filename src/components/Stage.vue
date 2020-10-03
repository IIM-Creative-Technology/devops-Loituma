<template>
  <div id="contenu">

    <div id="contenu-stage">
      <div class="rect-section-mini">
        <router-link :to="{name: 'stage-bts1'}">
          <div class="rect-section-mini-text"><span class="mini-text-left">BTS 1er<br/> UPMC</span></div>
          <div class="rect-section-mini-img" style="background-color: #000000"><img src="@/assets/stage/bts1-upmc/upmc.png" style="width: 60%"/></div>
        </router-link>
      </div>

      <div class="rect-section-mini">
        <router-link :to="{name: 'stage-bts2'}">
          <div class="rect-section-mini-img" style="background-color: black;"><img width="70%" src="@/assets/stage/bts2-sorbonne/sorbonne2.png"/></div>
          <div class="rect-section-mini-text"><span class="mini-text-right">BTS 2e <br/> Sorbonne</span></div>
          </router-link>
      </div>

    </div>

  </div>
</template>

<script>
export default { }
</script>

