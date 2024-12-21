<template>
  <qf-card title="权限创建" url="/auths" btnTitle="返回">
    <qf-from
      width="110px"
      :formConfig="formConfig"
      :formBtns="formBtns"
      @submit="submitFn"
    ></qf-from
  ></qf-card>
</template>

<script>
export default {
  methods: {
    submitFn(formData) {
      console.log("表单数据", formData);
    },
  },
  data() {
    return {
      // 表单配置
      formConfig: [
        {
          label: "权限名称",
          field: "auth_name",
          type: "text",
          rules: [
            {
              required: true,
              message: "权限名称必须填写",
              trigger: "blur",
            },
          ],
        },
        {
          label: "权限访问路径",
          field: "url",
          type: "text",
          rules: [
            {
              required: true,
              message: "权限访问路径必须填写",
              trigger: "blur",
            },
          ],
        },
        {
          label: "权限组件路径",
          field: "component",
          type: "text",
          rules: [
            {
              required: true,
              message: "权限组件路径必须填写",
              trigger: "blur",
            },
          ],
        },
      ],
      // 表单按钮组

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
