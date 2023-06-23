/*
 * @Author: callus
 * @Date: 2022-07-14 10:21:34
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/main.js
 */
import { createApp } from "vue";
import { setupWorker } from "msw";
import Antd from 'ant-design-vue'
import App from './App.vue'
import router from './routers/index.js'
import mock from "./mocks";
import 'ant-design-vue/dist/antd.less'
import "normalize.css";
// if (process.env.NODE_ENV === 'development') {
//     const { worker } = require('./mocks/browser')
//     worker.start()
//   }

const worker = setupWorker(...mock);

worker.start({});

const app = createApp(App)
app.use(Antd)
app.use(router)
app.mount("#app");