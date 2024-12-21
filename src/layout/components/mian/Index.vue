<template>
  <div class="top">
    <div class="l">
      <div class="btn" @click="changeMenuFn">
        <i
          :class="{ 'el-icon-s-fold': menuIcon, 'el-icon-s-unfold': !menuIcon }"
        ></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{ name1 }}</el-breadcrumb-item>
        <transition enter-active-class="animated fadeInRight">
          <el-breadcrumb-item :key="name2">{{ name2 }}</el-breadcrumb-item>
        </transition>
      </el-breadcrumb>
    </div>
    <div class="r">
      <span>火龙果（管理员）</span>
      <i class="el-icon-full-screen" v-screenfull></i>
      <i  class="el-icon-switch-button" @click="jump('/login')" ></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name1: "",
      name2: "",
      menuIcon: true,
    };
  },
  watch: {
    // $route(newData){
    //   console.log(666);
    //   // console.log(newData);
    //   this.name1 = newData.meta.name1;
    //   this.name2 = newData.meta.name2;
    // }
    $route: {
      handler(newData) {
        this.name1 = newData.meta.name1;
        this.name2 = newData.meta.name2;
      },
      immediate: true,
    },
  },
  methods: {
    changeMenuFn() {
      this.menuIcon = !this.menuIcon;
      this.$emit("changeMenu");
    },
    // pig() {
    //   // 判断是否支持
    //   if (!screenfull.enabled) {
    //     this.$message({
    //       message: "不支持全屏",
    //       type: "warning",
    //     });
    //     return false;
    //   }
    //   screenfull.toggle();
    // },
  },
};
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 50px;
  box-shadow: 0 1px 4px rgb(0 21 41 /8%);
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;

  .l {
    width: 300px;
    display: flex;
    align-items: center;

    .btn {
      width: 50px;
      height: 50px;
      line-height: 50px;
      font-size: 25px;
      text-align: center;
      margin: 0 5px;
      &:hover {
        background-color: rgb(0, 0, 0, 0.05);
        cursor: pointer;
      }
    }
  }
  .r {
    width: 200px;
    display: flex;
    align-items: center;

    i {
      font-size: 20px;
      margin-right: 10px;
      &:hover {
        color: cadetblue;
        cursor: pointer;
      }
    }
  }
}
</style>
