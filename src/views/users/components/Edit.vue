<template>
  <el-dialog
    title="用户编辑"
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
          label: "用户名",
          field: "uname",
          type: "text",
          rules: [
            {
              required: true,
              message: "用户名必须填写",
              trigger: "blur",
            },
          ],
        },
        {
          label: "手机号",
          field: "mobile",
          type: "text",
          rules: [
            {
              required: true,
              message: "手机号必须填写",
              trigger: "blur",
            },
            {
              validator: (rule, value, callback) => {
                if (!/^1\d{10}$/.test(value)) return callback("手机号格式有误");
                return callback();
              },
              trigger: "blur",
            },
          ],
        },
        {
          label: "冻结状态",
          field: "state",
          type: "select",
          payload: [
            { label: "冻结", value: "flase" },
            { label: "正常", value: "true" },
          ],
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
