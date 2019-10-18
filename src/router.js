import Vue from 'vue'
import Router from 'vue-router'
import First from './views/First.vue'
import Inventory from './views/ToyInventory.vue'
import Food from './views/FoodInventory.vue'
import Create from './views/Create.vue'
//import Testinventory from './views/TestInventory.vue'



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
      path: '/toys',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/create',
      name: 'create',
      component: Create
    },
    /*{
      path: '/test',
      name: 'test',
      component: Testinventory
  }*/
  ]
})