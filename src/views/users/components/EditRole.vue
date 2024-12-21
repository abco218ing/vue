<template>
  <el-dialog
    title="用户分类"
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
          label: "当前账号",
          field: "uname",
          disabled: true,
          type: "text",
          // rules: [
          //   {
          //     required: true,
          //     message: "用户名必须填写",
          //     trigger: "blur",
          //   },
          // ],
        },
        {
          label: "当前角色",
          field: "role_name",
          disabled: true,
          type: "text",
          // rules: [
          //   {
          //     required: true,
          //     message: "用户名必须填写",
          //     trigger: "blur",
          //   },
          // ],
        },

        {
          label: "选择角色",
          field: "role_id",
          type: "select",
          payload: [
            { label: "黑心老板", value: 1 },
            { label: "人事", value: 2 },
            { label: "管理员", value: 3 },
          ],
          rules: [{ required: true, message: "角色必须选择", trigger: "blur" }],
        },
      ],
      formBtns: [
        {
          width: "220px",
          content: "更新",
          type: "success",
        },
        // { content: "重置", type: "" },
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
