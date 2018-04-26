import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Search from '@/components/Search'
import Services from '@/components/Services'
import MyProfile from '@/components/MyProfile'
import MyHistory from '@/components/MyHistory'
import Result from '@/components/Result'
import Frame from '@/components/Frame'
import Confirmation from '@/components/Confirmation'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/frame',
      name: 'Frame',
      component: Frame
    },
    {
      path: '/',
      name: 'Index',
      component: Search
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/services',
      name: 'Services',
      component: Services
    },
    {
      path: '/myprofile',
      name: 'MyProfile',
      component: MyProfile
    },
    {
      path: '/history',
      name: 'History',
      component: MyHistory
    },
    {
      path: '/confirmation',
      name: 'Confirmation',
      component: Confirmation
    }
  ]
})
