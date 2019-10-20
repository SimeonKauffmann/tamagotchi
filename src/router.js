import Vue from 'vue'
import Router from 'vue-router'
import First from './views/First.vue'
import Create from './views/Create.vue'
import Inventory from './views/Inventory.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    }
  ]
})