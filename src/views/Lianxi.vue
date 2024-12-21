<template>
  <div>
    <qf-from
      width="80px"
      :formConfig="formConfig"
      :formBtns="formBtns"
      :rules="item.rules"
    ></qf-from>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单配置
      formConfig: [
        {
          label: "账号",
          type: "text",
          field: "uname",
          rules: [{ required: true, message: "账号必填", trigger: "blur" }],
        },
        {
          label: "密码",
          type: "password",
          field: "pwd",
          rules: [{ required: true, message: "账号必填", trigger: "blur" }],
        },
      ],
      formBtns: [
        {
          content: "创建",
          type: "primary",
        },
        {
          content: "重置",
          type: "",
        },
      ],
    };
  },
};
</script>

<style></style>
