/*
 * @Author: 曾宪林 877529974qq.com
 * @Date: 2019-07-18 15:41:21
 * @Last Modified by: 曾宪林
 * @Last Modified time: Do not edit
 * @Description: 
 */
import Vue from 'vue'
import Router from 'vue-router'
import sortable from '@/components/sortable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sortable',
      component: sortable
    }
  ]
})
