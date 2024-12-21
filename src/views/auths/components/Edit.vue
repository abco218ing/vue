<template>
  <el-dialog
    title="权限编辑"
    :visible.sync="state"
    width="40%"
    :before-close="handleClose"
  >
    <!-- 内容 -->
    <qf-from
      width="120px"
      :formConfig="formConfig"
      :formBtns="formBtns"
      @submit="submitFn"
    ></qf-from>
    <!-- 内容 -->
    <!-- <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取 消</el-button>
      <el-button type="primary">确 定</el-button>
    </span> -->
  </el-dialog>
</template>

<script>
export default {
  props: {
    state: {
      type: Boolean,
      dedault: false,
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
          content: "更新",
          type: "primary",
        },
        {
          content: "重置",
          type: "",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    submitFn(formData) {
      console.log("更新数据处理", formData);
    },
  },
};
</script>

<style></style>
