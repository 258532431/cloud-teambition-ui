import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import plan from '@/view/plan/index'
import planAdd from '@/view/plan/add'
import task from '@/view/task/index'
import taskAdd from '@/view/task/add'
import taskComplete from '@/view/statics/taskComplete'

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
      path: '/planAdd',
      name: 'planAdd',
      component: planAdd
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
    {
      path: '/taskAdd',
      name: 'taskAdd',
      component: taskAdd
    },
    {
      path: '/taskComplete',
      name: 'taskComplete',
      component: taskComplete
    },
  ]
})
