/*
 * @Author: callus
 * @Date: 2023-06-21 00:01:44
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/mocks/handlers.js
 */
// src/mocks/handlers.js
import { rest } from 'msw'

export const handlers = [
  // Handles a POST /login request
  rest.post('/login', null),

  // Handles a GET /user request
  rest.get('/user', null),
]