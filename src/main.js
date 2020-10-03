import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './components/Index.vue'
import Projets from './components/Projets.vue'
import Stage from './components/Stage.vue'
import About from './components/About.vue'

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
    }]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
