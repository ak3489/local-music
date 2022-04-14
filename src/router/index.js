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
      path: '/albumList/:id',
      name: 'albumList',
      component: resolve => require(['@/views/albumList'], resolve)
    },
    {
      path: '/singerPage/:id',
      name: 'singerPage',
      component: resolve => require(['@/views/singerPage'], resolve)
    },
  ]
})
