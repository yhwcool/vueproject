import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  linkExactActiveClass: "mui-active",
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    }
  ]
})
