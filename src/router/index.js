import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoList from '@/components/TodoList'
import Computed from '@/components/Computed'
import Intro from '@/components/Intro'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TodoList',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    }
  ]

})
