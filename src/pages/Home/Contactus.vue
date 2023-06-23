<template>
  <div class="box">
    <img class="map" src="/images/map.png" alt="" />
    <div class="info">
      <div v-for="item in list" :key="item.key">
        <img :src="`/images/${item.icon}`" alt="" />
        <div class="text">{{ item.key }}：{{ item.value }}</div>
      </div>
    </div>
  </div>
  <template />
</template>
<script setup>
const list = [
  {
    icon: "ic_youxiang@3x.png",
    key: "邮箱",
    value: "345678@qq.com",
  },
  {
    icon: "ic_dianhua@3x.png",
    key: "电话",
    value: "643729929",
  },
  {
    icon: "ic_dizhi@3x.png",
    key: "地址",
    value: "北京市朝阳区",
  },
];
</script>
<style scoped>
.box {
  display: flex;
  margin-bottom: 32px;
}
.map {
  width: 60%;
  height: 260px;
  object-fit: cover;
}

.info {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.info .text {
  font-size: 18px;
}

.info > div {
  display: flex;
  width: 70%;
}
.info > div img {
  width: 36px;
  margin-right: 16px;
}
</style>
