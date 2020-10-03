import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './components/Index.vue'
import Projets from './components/Projets.vue'
import Stage from './components/Stage.vue'
import About from './components/About.vue'
import Stage_bts1 from './components/stage/bts1-upmc.vue'
import Stage_bts2 from './components/stage/bts2-sorbonne.vue'
import Projets_padg from './components/projets/padg'
import Projets_ghibli from './components/projets/ghibli'
import Projets_csharp from './components/projets/csharp-game'
import Projets_elfamosodevis from './components/projets/elfamosodevis'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },{
      path: '/projets',
      name: 'projets',
      component: Projets
    },{
      path: '/stage',
      name: 'stage',
      component: Stage
    },{
      path: '/about',
      name: 'about',
      component: About
    },{
      path: '/github',
      beforeEnter() {location.href = 'http://github.com/loituma'}
    },{
      path: '/linkedin',
      beforeEnter() {location.href = 'https://www.linkedin.com/in/aymeric-derchain/'}
    },
    { path: '/stage/bts1-upmc', name: 'stage-bts1', component: Stage_bts1 },
    { path: '/stage/bts2-sorbonne', name: 'stage-bts2', component: Stage_bts2 },
    { path: '/projets/padg', name: 'projets-padg', component: Projets_padg },
    { path: '/projets/ghibli', name: 'projets-ghibli', component: Projets_ghibli },
    { path: '/projets/csharp', name: 'projets-csharp', component: Projets_csharp },
    { path: '/projets/elfamosodevis', name: 'projets-elfamosodevis', component: Projets_elfamosodevis }
    ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
