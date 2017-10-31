import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import form from '@/components/form'
import table from '@/components/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/form',
      name: 'form',
      component: form
    },
    {
      path: '/table/:id',
      name: 'table',
      component: table
    }
  ]
})
