<template>
  <div class="layout">
    <!-- 导航栏 -->
    <Menu :widthMenu="widthMenu" />
    <!-- 导航栏 -->
    <div class="main">
      <!-- 头部面包屑 -->
      <Mian @changeMenu="widthMenu = widthMenu == '200px' ? '75px' : '200px'" />
      <!-- 头部面包屑 -->
      <div class="content">
        <!-- <Test /> -->
        <transition enter-active-class="animated fadeInLeftBig">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import Test from "./Test.vue";
// import Menu from "./components/menu/Index.vue";
// import Mian from "./components/mian/Index.vue";
import { Menu, Mian } from "./components";
export default {
  data() {
    return {
      widthMenu: "200px",
    };
  },
  components: {
    // Text:Text,
    // Test,
    Menu,
    Mian,
  },
};
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  display: flex;

  .main {
    flex: 1;
    display: flex;
    flex-direction: column;

    .content {
      flex: 1;
      width: 96%;
      margin: auto;
      // background-color: aquamarine;
      overflow-y: scroll;
    }
  }
}
</style>
