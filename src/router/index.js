import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import TodoList from '@/components/TodoList'
import Computed from '@/components/Computed'
import VueTodos from '@/pages/VueTodos'
const TodoList = r => require.ensure([], () => r(require('@/components/TodoList')))
const ParentSon = r => require.ensure([], () => r(require('@/pages/ParentSon/index')))
const SonParent = r => require.ensure([], () => r(require('@/pages/SonParent/index')))
const EmitOn = r => require.ensure([], () => r(require('@/pages/EmitOn/index')))

// import Intro from '@/components/Intro'
// import Test from '@/components/Test'

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
      path: '/VueTodos',
      name: 'VueTodos',
      component: VueTodos
    },
    {
      path: '/Computed',
      name: 'Computed',
      component: Computed
    },
    {
      path: '/pages/ParentSon',
      name: 'ParentSon',
      component: ParentSon
    },
    {
      path: '/pages/SonParent',
      name: 'SonParent',
      component: SonParent
    },
    {
      path: '/pages/EmitOn',
      name: 'EmitOn',
      component: EmitOn
    }
  ]

})
