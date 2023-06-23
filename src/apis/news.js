/*
 * @Author: callus
 * @Date: 2023-06-22 23:37:14
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/apis/news.js
 */
import axios from "axios";

export const baseURL = "http://localhost:3001";

export const getNewsById = (id) => {
  return axios.get(`${baseURL}/news/${id}`);
};

export const getNewsList = async () => {
  const { data } = await axios.get(`${baseURL}/news`);

  const imageList = ["/images/banner1.png", "/images/banner2.png"];

  return data.map((i, index) => ({
    ...i,
    image: imageList[index],
  }));
};