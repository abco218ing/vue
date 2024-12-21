<template>
  <qf-card title="门店创建" url="/stores" btnTitle="返回">
    <!-- 内容 -->
    <!-- <el-tabs v-model="activeName" @tab-click="handleClick"> -->
    <el-tabs v-model="activeName">
      <el-tab-pane label="基本信息" name="base">
        <CreateBase ref="base" />

        <!-- 按钮 -->
        <el-button style="margin-left: 80px" type="primary" @click="submitFn">
          创建
        </el-button>
        <!-- 按钮 -->
      </el-tab-pane>
      <el-tab-pane label="门店筛选" name="filter">
        <CreateFilter ref="filter" />
      </el-tab-pane>
      <el-tab-pane label="门店相册" name="imgs">
        <CreateImgs ref="imgs" />
      </el-tab-pane>
      <el-tab-pane label="门店地图" name="map">
        <CreateMap ref="map" />
      </el-tab-pane>
    </el-tabs>
    <!-- 内容 -->
  </qf-card>
</template>

<script>
import CreateBase from "./components/create/Base.vue";
import CreateFilter from "./components/create/Filter.vue";
import CreateImgs from "./components/create/Imgs.vue";
import CreateMap from "./components/create/Map.vue";

export default {
  components: {
    CreateBase,
    CreateFilter,
    CreateImgs,
    CreateMap,
  },
  data() {
    return {
      activeName: "base",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    submitFn() {
      // base验证
      this.$refs.base.$children[0].$children[0].validate((isSuccess) => {
        if (isSuccess) {
          // base数据
          console.log(this.$refs.base.$children[0].$data);

          // 门店筛选验证
          this.$refs.filter.$children[0].$children[0].validate((isSuccess) => {
            if (isSuccess) {
              // filter数据
              console.log(this.$refs.filter.$children[0].$data.formData);
            }
          });
        }
      });
    },
  },
};
</script>

<style></style>
