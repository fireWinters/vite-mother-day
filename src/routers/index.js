/*
 * @Author: callus
 * @Date: 2023-06-22 22:51:26
 * @LastEditors: callus
 * @Description: 路由配置
 * @FilePath: /vite-mother-day1/src/routers/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'

const About = { template: '<div>About</div>' }
import Home from '../pages/Home/index.vue'
import Detail from '../pages/Detail/index.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/detail/:id',
    component: Detail
  },
]


const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router