<template>
  <div class="roles">
    <qf-card title="创建角色" url="/roles" btnTitle="返回" >
      <qf-from
        width="80px"
        :formConfig="formConfig"
        :formBtns="formBtns"
        @submit="submitFn"
      ></qf-from>
    </qf-card>
  </div>
</template>

<script>
export default {
  methods: {
    submitFn(formData) {
      console.log("更新数据处理", formData);
    },
  },
  data() {
    return {
      formConfig: [
        {
          label: "角色名",
          field: "role_name",
          type: "text",
          rules: [
            {
              required: true,
              message: "角色名必须填写",
              trigger: "blur",
            },
          ],
        },
        {
          label: "角色描述",
          field: "role_desc",
          type: "text",
          rules: [
            {
              required: true,
              message: "角色描述必须填写",
              trigger: "blur",
            },
          ],
        },
      ],
      formBtns: [
        {
          content: "创建",
          type: "success",
        },
        { content: "重置", type: "" },
      ],
    };
  },
};
</script>

<style></style>
