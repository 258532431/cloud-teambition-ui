// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import Layout from './components/Layout'   //引入Layout组件，将App替换成我们的布局组件Layout

import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';

Vue.use(MuseUI);

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
  render: h => h(Layout), //vue2.0写法
})
