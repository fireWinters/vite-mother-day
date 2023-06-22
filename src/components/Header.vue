<template>
  <header>
    <div class="content">
      <div class="title">母亲节公益</div>
      <nav>
        <ul>
          <li
            v-for="(nav, index) in navList"
            :class="{
              selected: selected === index,
            }"
            @click="selected = index"
          >
            <a :href="nav.link"> {{ nav.name }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const navList = [
  {
    name: "首页",
    link: "/",
  },
  {
    name: "新闻资讯",
    link: "/#news",
  },
  {
    name: "关于我们",
    link: "/#aboutus",
  },
  {
    name: "联系我们",
    link: "/#contactus",
  },
];

const selected = ref(0);
</script>
<style scoped>
header {
  height: 68px;
  background-color: #fcaaab;
  display: flex;
  justify-content: center;
}

.content {
  width: 1080px;
  display: flex;
  justify-content: space-between;
}

.title {
  font-size: 26px;
  color: white;
  line-height: 68px;
}

nav ul {
  display: flex;
  height: 100%;
  align-items: center;
}
nav ul li {
  margin: 8px;
  display: flex;
  align-items: center;
  color: white;
  height: 50%;
  font-size: 14px;
  transition: 0.2s;
}

.selected {
  border-bottom: 3px solid white;
  font-size: 16px;
}

@media (max-width: 550px) {
  nav {
    display: none;
  }
}
</style>
