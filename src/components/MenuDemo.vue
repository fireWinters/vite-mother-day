<!--
 * @Author: callus
 * @Date: 2023-06-24 09:33:02
 * @LastEditors: callus
 * @Description: some description
 * @FilePath: /vite-mother-day1/src/components/MenuDemo.vue
-->
<template>
    <a-menu v-model:selectedKeys="current" mode="horizontal">
      <a-menu-item key="mail">
        <template #icon>
          <mail-outlined />
        </template>
        Navigation One
      </a-menu-item>
      <a-menu-item key="app" disabled>
        <template #icon>
          <appstore-outlined />
        </template>
        Navigation Two
      </a-menu-item>
      <a-sub-menu key="sub1">
        <template #icon>
          <setting-outlined />
        </template>
        <template #title>Navigation Three - Submenu</template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a href="https://antdv.com" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      </a-menu-item>
    </a-menu>
    <div id="container"></div>
  </template>
  <script>
  import { defineComponent, ref } from 'vue';
  import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
  import AMapLoader from '@vuemap/amap-jsapi-loader';
  export default defineComponent({
    components: {
      MailOutlined,
      AppstoreOutlined,
      SettingOutlined,
    },
    setup() {
      const current = ref(['mail']);
      return {
        current,
      };
    },
  });
//   var map = new AMap.Map('container', {
//         viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
//         zoom:11, // 初始化地图层级
//         center: [116.397428, 39.90923] // 初始化地图中心点
//     });

AMapLoader.load().then((AMap)=>{
    map = new AMap.Map('container',{
        viewMode: '2D', // 默认使用 2D 模式，如果希望使用带有俯仰角的 3D 模式，请设置 viewMode: '3D'
        zoom:11, // 初始化地图层级
        center: [116.397428, 39.90923] // 初始化地图中心点
    });
}).catch(e=>{
    console.log(e);
})
  </script>
 <style scoped>
    #container {
        width: 60%;
        height: 260px;
        }
    </style>