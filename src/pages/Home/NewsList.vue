<template>
  <div class="news-list">
    <News v-for="item in newsList" :itemDate="item" />
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getNewsList } from "../../apis/news.js";
import News from "./News.vue";

const newsList = ref([]);

onMounted(() => {
  getNewsList().then((res) => {
    newsList.value = res;
  });
});
</script>
<style scoped>
.news-list {
  height: 100%;
  width: 60%;
  overflow: auto;
}
</style>
