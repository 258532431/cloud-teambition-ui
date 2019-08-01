import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import message from '@/view/message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/message',
      name: 'message',
      component: message
    }
  ]
})
