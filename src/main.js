// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
// import App from './App'
import Layout from './components/Layout'

import store from './vuex/store'

import './assets/css/base.css'

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
Vue.use(MuseUI);

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element);

import axios from 'axios'
import qs from 'qs'

Vue.prototype.axios = axios.create({
  headers: {'content-type': 'application/x-www-form-urlencoded'}
});
Vue.prototype.qs = qs
Vue.prototype.axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Layout), //vue2.0写法
  // template: '<App/>', //配置根模板 即打开页面显示那个组件
  // components: { App } // 注入组件
})
