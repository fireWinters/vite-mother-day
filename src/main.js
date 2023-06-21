/*
 * @Author: callus
 * @Date: 2023-06-20 23:42:40
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/main.js
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// if (process.env.NODE_ENV === 'development') {
  //   const { worker } = require('./mocks/browser')
  //   worker.start()
  // }

createApp(App).mount('#app')
