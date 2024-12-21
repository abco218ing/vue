<template>
  <div class="base">
    <qf-form width="80px" :formConfig="formConfig"></qf-form>
    <el-upload
      class="qf-upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="img" :src="img" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
// 标题、所属分类、所属地区、封面60x60、相册
// 商家特色筛选
// 人均价筛选
// 优惠活动筛选
// 起送、夜间配送、人均、电话☎️、营业时间、地址（腾讯地图定位获取）

export default {
  methods: {
    handleAvatarSuccess(res, file) {
      this.img = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
  data() {
    return {
      img: "",
      // 表单配置
      formConfig: [
        {
          label: "标题",
          field: "title",
          type: "text",
          rules: [{ required: true, message: "标题必须", trigger: "blur" }],
          payload: {
            width: "500px",
          },
        },
        {
          label: "起送",
          field: "start_price",
          type: "text",
          rules: [{ required: true, message: "起送必须", trigger: "blur" }],
          payload: {
            width: "300px",
          },
        },
        {
          label: "夜间配送",
          field: "send_price",
          type: "text",
          rules: [{ required: true, message: "夜间配送", trigger: "blur" }],
          payload: {
            width: "300px",
          },
        },
        {
          label: "人均",
          field: "avg_price",
          type: "text",
          rules: [{ required: true, message: "人均必须", trigger: "blur" }],
          payload: {
            width: "300px",
          },
        },
        {
          label: "电话",
          field: "mobile",
          type: "text",
          rules: [{ required: true, message: "电话必须", trigger: "blur" }],
          payload: {
            width: "300px",
          },
        },
        {
          label: "营业时间",
          field: "work",
          type: "text",
          rules: [{ required: true, message: "营业时间必须", trigger: "blur" }],
          payload: {
            width: "300px",
          },
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
