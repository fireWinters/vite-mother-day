<template>
  <div class="content">
    <main>
      <Swiper />
      <Title text="新闻资讯" anchor="news" />
      <div class="news-box">
        <NewsList />
        <Donation />
      </div>
      <Title text="关于我们" anchor="aboutus" />
      <Aboutus />
      <Title text="联系我们" anchor="contactus" />
      <Contactus />
    </main>
  </div>
</template>
<script setup>
import Title from "../../components/Title.vue";
import Swiper from "./Swiper.vue";
import NewsList from "./NewsList.vue";
import Donation from "./Donation.vue";
import Aboutus from './Aboutus.vue'
import Contactus from './Contactus.vue'

</script>
<style scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
main {
  max-width: 1080px;
  width: 100vw;
}

.news-box {
  height: 360px;
  display: flex;
  justify-content: space-between;
}
</style>
