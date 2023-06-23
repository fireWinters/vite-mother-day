/*
 * @Author: callus
 * @Date: 2023-06-23 23:09:17
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/mocks/index.js
 */
import { rest } from "msw";

export default [
  rest.get("/news-list", (req, res, ctx) => {
    return res(
      ctx.json({
        list: [
          {
            title: "标题一",
            description: "描述描述描述描述描述描述描述描述",
            image: "/images/banner1.png",
          },
          {
            title: "标题二",
            description: "描述描述描述描述描述描述描述描述",
            image: "/images/banner1.png",
          },
          {
            title: "标题三",
            description: "描述描述描述描述描述描述描述描述",
            image: "/images/banner1.png",
          },
          {
            title: "标题四",
            description: "描述描述描述描述描述描述描述描述",
            image: "/images/banner1.png",
          },
        ],
      })
    );
  }),

  rest.get('/donation', (req, res, ctx) => {
    return res(
      ctx.json({
        donationTotal: 784944,
        personTotal: 9883,
      })
    )
  })
];
