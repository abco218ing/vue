<template>
  <el-dialog
    title="角色编辑"
    :visible.sync="state"
    width="30%"
    :before-close="handleClose"
  >
    <!-- 内容 -->
    <qf-from
      width="80px"
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
          content: "更新",
          type: "success",
        },
        { content: "重置", type: "" },
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
