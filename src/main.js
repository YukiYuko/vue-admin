// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';    // 使用 CSS
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import 'vue-touch-ripple/component.css'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

import TouchRipple from 'vue-touch-ripple'
Vue.use(TouchRipple);

import '../static/UE/ueditor.config.js'
import '../static/UE/ueditor.all.js'
import '../static/UE/lang/zh-cn/zh-cn.js'
import '../static/UE/ueditor.parse.js'

// // 全局使用封装的ajax
// import ajax from "./server"; 
// Vue.use(ajax);


Vue.config.productionTip = false

// Vue.use(iView);
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
