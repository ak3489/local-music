import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import { resolve } from 'url';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ListType/:ListType',
      name: 'ListType',
      component: resolve => require(['@/views/ListType'], resolve)
    },
    {
      path: '/albumPage/:id',
      name: 'albumPage',
      component: resolve => require(['@/views/albumPage'], resolve)
    },
    {
      path: '/singerPage/:id',
      name: 'singerPage',
      component: resolve => require(['@/views/singerPage'], resolve)
    },
    {
      path: '/search',
      name: 'search',
      component: resolve => require(['@/views/search'], resolve)
    },
  ]
})
