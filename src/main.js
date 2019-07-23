/*
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 15:41:21
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 图表
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import './assets/base.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
