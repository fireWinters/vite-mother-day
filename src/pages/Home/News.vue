<template>
  <div class="box" @click="gotoDetail">
    <div class="left">
      <div class="title">{{ itemDate.title }}</div>
      <div class="description">
        {{ itemDate.subTitle }}
      </div>
    </div>
    <img :src="itemDate.image" alt="" />
  </div>
</template>
<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const { itemDate } = defineProps(["itemDate"]);

const gotoDetail = () => {
  router.push(`/detail/${itemDate.id}`);
};
</script>
<style scoped>
.box {
  background-color: #f3eeee;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
  color: rgb(57, 57, 57);
  height: 120px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.box .left {
  width: 65%;
}

.box img {
  width: 30%;
  border-radius: 12px;
}
.title {
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 12px;
}
.description {
  color: rgb(137, 137, 137);
}
</style>
