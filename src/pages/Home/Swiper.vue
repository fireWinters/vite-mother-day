<template>
  <div class="box">
    <div class="swiper-box">
      <Swiper
        :navigation="true"
        :modules="modules"
        :autoplay="{
          delay: 2500,
        }"
      >
        <SwiperSlide v-for="banner in bannerList" :key="banner">
          <img :src="`/images/${banner}`" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="countdown">
      <div class="title">下次母亲节倒计时</div>
      <div class="time">
        <template v-for="(value, key) in timeMap">
          <span>{{ times[key] }}</span> {{ value }}
        </template>
      </div>

      <div class="more" @click="openLink">了解更多 ></div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted, toRaw } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Autoplay } from "swiper";
import moment from "moment";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation, Autoplay];
const bannerList = ["banner1.png", "banner2.png"];

const times = reactive({
  months: 0,
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
});

const timeMap = {
  months: "月",
  days: "日",
  hours: "小时",
  minutes: "分",
  seconds: "秒",
};
let timer;
onMounted(() => {
  const endTime = moment("2023-05-14").unix();

  timer = setInterval(() => {
    const startTime = moment().unix();
    const duration = moment.duration(endTime - startTime, "seconds");

    for (const key in timeMap) {
      times[key] = duration[key]();
    }
  }, 1000);
});
onUnmounted(() => clearInterval(timer));

const openLink = () =>
  window.open(
    "https://baike.baidu.com/item/%E6%AF%8D%E4%BA%B2%E8%8A%82/127378?fr=aladdin"
  );
</script>
<style scoped>
.box {
  height: 360px;
  background-color: #FFE8EC;
  margin: 16px 0;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
}

.swiper-box {
  height: 100%;
  width: 50%;
}
.box img {
  height: 360px;
}

.countdown {
  padding: 40px;
  position: relative;
  width: 50%;
}

.countdown .title {
  font-size: 32px;
  margin-bottom: 30px;
}

.countdown .time {
  font-size: 24px;
}

.countdown .time span {
  background-color: #feacb7;
  border-radius: 4px;
  padding: 4px 8px;
  color: white;
}

.more {
  color: #c16e79;
  cursor: pointer;
  position: absolute;
  right: 40px;
  bottom: 40px;
  transition: 0.2s;
}
.more:hover{
  color: white;
}
</style>
