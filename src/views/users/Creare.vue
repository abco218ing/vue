<template>
  <div class="creare">
    <el-card class="box-card">
      <!-- 头部 -->
      <div slot="header" class="clearfix">
        <span>用户创建</span>
        <el-button class="right" type="primary" round @click="jump('/users')"
          >返回</el-button
        >
      </div>
      <!-- 头部 -->
      <!-- 内容部分 -->
      <qf-from
        width="80px"
        :formConfig="formConfig"
        :formBtns="formBtns"
        @submit="submitFn"
      ></qf-from>
      <!-- 内容部分 -->
    </el-card>
  </div>
</template>

<script>
export default {
  methods: {
    submitFn(formData) {
      console.log(formData);
    },
  },
  data() {
    return {
      // 表单配置
      formConfig: [
        {
          label: "账号",
          field: "uname",
          type: "text",
          rules: [{ required: true, message: "账号必填", trigger: "blur" }],
        },
        {
          label: "密码",
          field: "pwd",
          type: "password",
          showPassword: true,
          rules: [{ required: true, message: "密码必填", trigger: "blur" }],
        },
        {
          label: "密保问题",
          field: "question",
          type: "select",
          payload: [
            { label: "父亲的名字", value: "父亲的名字" },
            { label: "偶像的名字", value: "偶像的名字" },
            { label: "其中一位老师的名字", value: "其中一位老师的名字" },
          ],
          rules: [{ required: true, message: "密保问题必填", trigger: "blur" }],
        },
        {
          label: "密保答案",
          field: "answer",
          type: "text",
          rules: [{ required: true, message: "密保答案必填", trigger: "blur" }],
        },
      ],
      // 表单按钮组

      formBtns: [
        { content: "创建", type: "primary" },
        { content: "重置", type: "" },
      ],
    };
  },
};
</script>

<style></style>
