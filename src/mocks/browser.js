/*
 * @Author: callus
 * @Date: 2023-06-21 00:12:12
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/mocks/browser.js
 */
// src/mocks/browser.js
import { setupWorker } from 'msw'
import { handlers } from './handlers'

// This configures a Service Worker with the given request handlers.
export const worker = setupWorker(...handlers)