<template>
  <!-- 表单选项 -->
  <el-form :model="formData" :label-width="width" ref="form1">
    <el-form-item
      v-for="(item, index) in formConfig"
      :key="index"
      :prop="item.field"
      :label="item.label"
      :label-width="width"
      :rules="item.rules"
    >
      <!-- 用户 -->
      <el-input
      clearable
        v-model="formData[item.field]"
        :placeholder="item.placeholder"
        :prefix-icon="item.icon"
        type="text"
        :disabled="item.disabled"
        v-if="item.type === 'text'"
      ></el-input>
      <!-- 密码 -->
      <el-input
      clearable
        v-model="formData[item.field]"
        :placeholder="item.placeholder"
        :prefix-icon="item.icon"
        type="password"
        :show-password="item.showPassword"
        v-if="item.type === 'password'"
      ></el-input>
      <!-- 选择框 -->
      <el-select
      clearable
        v-if="item.type === 'select'"
        :prefix-icon="item.icon"
        v-model="formData[item.field]"
        :placeholder="item.placeholder"
      >
        <el-option
          v-for="item in item.payload"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <!-- 表单按钮 -->
    <el-form-item v-if="formBtns && formBtns.length">
      <el-button
        v-for="(item, index) in formBtns"
        :key="index"
        :type="item.type"
        :style="{ width: item.width || '70px' }"
        @click="submitFn(item.content)  "
        >{{ item.content }}</el-button
      >
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  //获取数据
  props: {
    //表格通用
    width: {
      type: String,
      default: "",
    },
    //表格配置
    //label:标题 width:标题宽度 field:字段 type:输入类型
    formConfig: {
      type: Array,
      required: true,
    },
    // type： 颜色  content：创建 更新
    formBtns: {
      type: Array,
    },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    submitFn(content) {
      //重置
      if (content === "重置") {
        this.$refs.form1.resetFields();
      } else {
        //  提交语法 this.$refs.ref属性值.validate()

        this.$refs.form1.validate((isSuccess) => {
          if (isSuccess) {
            this.$emit("submit", this.formData);
            this.$router.push({
          path: '/welcome'
        })

          }
        });
      }
    },
  },
};
</script>

<style></style>
