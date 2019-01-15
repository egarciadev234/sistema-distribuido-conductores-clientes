import Vue from 'vue'
import Router from 'vue-router'
import CreateConductor from '@/components/CreateConductor'
Vue.use(Router)

export default new Router({
  routes: [
    /*{
      path: '/',
      name: 'CreateConductor',
      component: CreateConductor
    },*/
    {
      path: '/register',
      name: 'CreateConductor',
      component: CreateConductor
    }
  ]
})
