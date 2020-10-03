<template>
    <div id="app">
      <header>
        <div id="nav-menu">
          <router-link to="/projets" class="menu-text" active-class="link-menu_actived"><span>Projects</span></router-link>
          <router-link to="/stage" class="menu-text" active-class="link-menu_actived"><span>Stage</span></router-link>
          <router-link to="/about" class="menu-text" active-class="link-menu_actived"><span>A propos</span></router-link>
        </div>

        <div id="nav-mobile">
          <span v-on:click="myFunction">Menu</span>
          <div id="sousNav-mobile">
            <div><span v-on:click="myFunction">Menu</span></div>
            <ul>
              <li><router-link to="/projets" class="menu-text" active-class="link-menu_actived2"><span>Projects</span></router-link></li>
              <li><router-link to="/stage" class="menu-text" active-class="link-menu_actived2"><span>Stage</span></router-link></li>
              <li><router-link to="/about" class="menu-text" active-class="link-menu_actived2"><span>A propos</span></router-link></li>
            </ul>
          </div>
        </div>

        <div id="nav-logo">
          <router-link to="/">
            <img alt="Ankh logo" src="@/assets/ankh2.png">
          </router-link>
        </div>

        <div id="nav-rs">
          <router-link to="/github">
            <img alt="Github logo" src="@/assets/github.png">
          </router-link>
          <router-link to="/linkedin">
            <img alt="Linkedin logo" src="@/assets/linkedin.png">
          </router-link>
        </div>
      </header>

        <router-view class="view"></router-view>
  </div>
</template>

<script>
  import '@/scss/style.scss'
  import '@/scss/style-mobile.scss'
  import '@/scss/style-768.scss'
  import '@/scss/style-992.scss'
  import '@/scss/style-1200.scss'

  export default {
    methods: {
      myFunction: function () {
        const x = document.getElementById("sousNav-mobile");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
      }
    }
  }
</script>
