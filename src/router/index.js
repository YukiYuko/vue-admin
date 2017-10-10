import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import BaseTable from '@/views/BaseTable'
import BaseForm from '@/views/BaseForm'
import BaseModal from '@/views/BaseModal'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
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
    }
  ]
})
export default router;
