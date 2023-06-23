<template>
  <div class="donation">
    <div class="item" v-for="item in list" :key="item.name">
      <img :src="item.icon" alt="" srcset="" />
      <div class="right">
        <div class="num">{{ item.num }}</div>
        <div class="text">{{ item.name }}</div>
      </div>
    </div>

    <button @click="visible = true">参与捐赠</button>
  </div>
  <a-modal
    v-model:visible="visible"
    title="请输入捐赠金额"
    okText="捐赠"
    cancelText="取消"
    @ok="clickDonation"
  >
    <a-input-number v-model:value="dnnationValue" addon-after="¥" />
  </a-modal>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { donation, getDonation } from "../../apis/donation";

const list = ref([
  {
    name: "历史善款总额",
    num: 0,
    icon: "/images/ic_shankuan@3x.png",
  },
  {
    name: "历史爱心总人次",
    num: 0,
    icon: "/images/ic_aixin@3x.png",
  },
]);

const visible = ref(false);
const dnnationValue = ref(0);
onMounted(() => {
  getDonation().then(({ data }) => {
    list.value[0].num = data.donationTotal;
    list.value[1].num = data.personTotal;
  });
});

const clickDonation = () => {
  donation(dnnationValue.value).then(() => {
    list.value[0].num += dnnationValue.value;
    list.value[1].num++;
    visible.value = false;
    dnnationValue.value = 0;
  });
};
</script>
<style scoped>
.donation {
  width: 35%;
  background-color: #ffe8ec;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.item {
  height: 86px;
  display: flex;
  font-size: 18px;
}

.item img {
  height: 100%;
  width: 98px;
  margin: 0 18px;
}

.right {
  display: flex;
  width: 140px;
  flex-direction: column;
  justify-content: space-evenly;
}

.right .num {
  font-size: 32px;
  font-weight: 600;
}

button {
  width: 60%;
  font-size: 20px;
  padding: 8px;
  border-radius: 12px;
  border: none;
  background-color: #c16e79;
  color: white;
  cursor: pointer;
  transition: 0.25s;
}
button:hover {
  background-color: #e3a1a9;
}
</style>
