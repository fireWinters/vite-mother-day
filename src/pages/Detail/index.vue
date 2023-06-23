<!--
 * @Author: callus
 * @Date: 2023-06-22 22:42:20
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/pages/Detail/index.vue
-->
<template>
    <div class="detail">
      <h1>{{ detail.title }}</h1>
      <p>{{ detail.content }}</p>
    </div>
  </template>
  <script setup>
  import { useRoute } from "vue-router";
  import { onMounted, reactive } from "vue";
  import { getNewsById } from "../../apis/news";
  
  const route = useRoute();
  
  const detail = reactive({
    title: "",
    subTitle: "",
    content: "",
  });
  
  onMounted(() => {
    console.log(route.params.id,'这是ID');
    getNewsById(route.params.id).then(({ data }) => {
      detail.title = data.title;
      detail.subTitle = data.subTitle;
      detail.content = data.content;
    });
  });
  </script>
  <style scoped>
  .detail {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .detail > * {
    max-width: 980px;
  }
  
  .detail h1 {
    text-align: center;
  }
  </style>
  