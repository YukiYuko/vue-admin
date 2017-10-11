import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'
import BaseTable from '@/views/BaseTable'
import BaseForm from '@/views/BaseForm'
import BaseModal from '@/views/BaseModal'
import BaseMasonry from '@/views/BaseMasonry'
import BaseMasonryFlex from '@/views/BaseMasonryFlex'
import TextStroke from '@/views/css3/TextStroke'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/basetable',
      name: 'basetable',
      component: BaseTable
    },
    {
      path: '/baseform',
      name: 'baseform',
      component: BaseForm
    },
    {
      path: '/basemodal',
      name: 'basemodal',
      component: BaseModal
    },
    {
      path: '/basemasonry',
      name: 'basemasonry',
      component: BaseMasonry
    },
    {
      path: '/baseMasonryflex',
      name: 'baseMasonryflex',
      component: BaseMasonryFlex
    },
    {
      path: '/textstroke',
      name: 'textstroke',
      component: TextStroke
    }
  ]
})
export default router;
