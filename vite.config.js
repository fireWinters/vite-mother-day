/*
 * @Author: callus
 * @Date: 2023-06-20 23:42:40
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#c16e79'
        }
      }
    }
  }
})
