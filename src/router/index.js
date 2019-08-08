import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import plan from '@/view/plan/index'
import task from '@/view/task/index'
import statics from '@/view/statics/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/plan',
      name: 'plan',
      component: plan
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
    {
      path: '/statics',
      name: 'statics',
      component: statics
    },
  ]
})
