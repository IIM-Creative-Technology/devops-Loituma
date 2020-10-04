<template>
    <div id="app">
      <header>
        <div id="nav-menu">
          <router-link :to="{name: 'projets'}" class="menu-text" active-class="link-menu_actived"><span>Projects</span></router-link>
          <router-link :to="{name: 'stage'}" class="menu-text" active-class="link-menu_actived"><span>Stage</span></router-link>
          <router-link :to="{name: 'about'}" class="menu-text" active-class="link-menu_actived"><span>A propos</span></router-link>
        </div>

        <div id="nav-mobile">
          <span v-on:click="mobileMenu">Menu</span>
          <div id="sousNav-mobile">
            <div><span v-on:click="mobileMenu">Menu</span></div>
            <ul>
              <li><router-link :to="{name: 'projets'}" class="menu-text" active-class="link-menu_actived2"><span>Projects</span></router-link></li>
              <li><router-link :to="{name: 'stage'}" class="menu-text" active-class="link-menu_actived2"><span>Stage</span></router-link></li>
              <li><router-link :to="{name: 'about'}" class="menu-text" active-class="link-menu_actived2"><span>A propos</span></router-link></li>
            </ul>
          </div>
        </div>

        <div id="nav-logo">
          <router-link :to="{name: 'index'}">
            <img alt="Ankh logo" src="@/assets/ankh2.png">
          </router-link>
        </div>

        <div id="nav-rs">
          <router-link :to="{name: 'github'}">
            <img alt="Github logo" src="@/assets/github.png">
          </router-link>
          <router-link :to="{name: 'linkedin'}">
            <img alt="Linkedin logo" src="@/assets/linkedin.png">
          </router-link>
        </div>
      </header>

      <router-view class="view"></router-view>
  </div>
</template>

<script>
  import '@/css/style.css'
  import '@/css/style-mobile.css'
  import '@/css/style-768.css'
  import '@/css/style-992.css'
  import '@/css/style-1200.css'

  export default {
    methods: {
      mobileMenu: function () {
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
