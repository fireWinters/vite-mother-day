<template>
     <a-button>这是一个按钮</a-button>
    <a-list item-layout="horizontal" :data-source="data" class="listBox">
      <template #renderItem="{ item }">
        <a-list-item>
          <a-list-item-meta
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          >
            <template #title>
              <a href="https://www.antdv.com/">{{ item.title }}</a>
            </template>
            <template #avatar>
              <a-avatar src="https://joeschmoe.io/api/v1/random" />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </template>
  <script>
  import { defineComponent } from 'vue';
//   import {List} from 'ant-design-vue'
  const data = [{
    title: 'Ant Design Title 1',
  }, {
    title: 'Ant Design Title 2',
  }, {
    title: 'Ant Design Title 3',
  }, {
    title: 'Ant Design Title 4',
  }];
  export default defineComponent({
    setup() {
      return {
        data,
      };
    },
    // components:{
    //     List
    // }
  });
  </script>
  <style>
  .listBox{
width: 100%;
height:200px;
margin: 16px 0;
    border-radius: 16px;
    overflow: hidden;
    display: flex;
}
  </style>