<template>
  <div class="box">
    <h4 :id="props.anchor">{{ props.text }}</h4>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
const props = defineProps({
  text: {
    type: String,
  },
  anchor: {
    type: String,
  },
});
</script>
<style scoped>
.box {
  width: 100%;
  display: flex;
  margin: 14px 0;
}
h4 {
  color: rgb(60, 60, 60);
  margin-left: 8px;
  position: relative;
}

h4::after {
  content: "";
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fcaaab;
  position: absolute;
  bottom: -8px;
  left: 0;
  border-radius: 2px;
}
</style>
