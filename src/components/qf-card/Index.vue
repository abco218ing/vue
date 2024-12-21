<template>
  <el-card class="box-card">
    <!-- 头部 -->
    <div slot="header" class="clearfix">
      <span>{{ title }}</span>
      <el-button
        v-if="url"
        class="right"
        type="primary"
        round
        @click="jump(url)"
        >{{ btnTitle }}</el-button
      >
    </div>
    <!-- 头部 -->
    <!-- 内容部分 -->
    <slot></slot>
    <!-- 内容部分 -->
  </el-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
    },
    btnTitle: {
      type: String,
    },
  },
};
</script>

<style></style>
