import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'
import BaseTable from '@/views/BaseTable'
import BaseForm from '@/views/BaseForm'
import BaseModal from '@/views/BaseModal'
import BaseMasonry from '@/views/BaseMasonry'
import BaseMasonryFlex from '@/views/BaseMasonryFlex'
import BaseCharts from '@/views/BaseCharts'
// csss3
import TextStroke from '@/views/css3/TextStroke'
// JS
import RequestAnimationFrame from '@/views/js/RequestAnimationFrame'
import Canvas from '@/views/js/Canvas'
// 无限滚动
import VueInfiniteScroll from '@/views/VueInfiniteScroll'
import VueInfiniteLoading from '@/views/VueInfiniteLoading'


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
      path: '/basecharts',
      name: 'basecharts',
      component: BaseCharts
    },
    // css3
    {
      path: '/textstroke',
      name: 'textstroke',
      component: TextStroke
    },
    // js
    {
      path: '/requestAnimationFrame',
      name: 'requestAnimationFrame',
      component: RequestAnimationFrame
    },
    {
      path: '/canvas',
      name: 'canvas',
      component: Canvas
    },
    // 无限滚动
    {
      path: '/VueInfiniteScroll',
      name: 'VueInfiniteScroll',
      component: VueInfiniteScroll
    },
    {
      path: '/VueInfiniteLoading',
      name: 'VueInfiniteLoading',
      component: VueInfiniteLoading
    },
  ]
})
export default router;
