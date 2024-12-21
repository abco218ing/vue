<template>
            
             <div class="login">
 <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
    <div class="loginfrom animated bounceInDown">
      <h1>锋云本地生活平台</h1>
      <qf-from
        :formConfig="formConfig"
        :formBtns="formBtns"
        @submit="submitFn"
      ></qf-from>
    </div>
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
          field: "question",
          type: "select",
          placeholder: "请选择密保问题",
          payload: [
            { label: "三体就坏的人是哪一位啊?", value: "三体就坏的人是哪一位啊?" },
            { label: "海贼王是路飞你有疑问吗?", value: "海贼王是路飞你有疑问吗?" },
            { label: "在你们面前超帅的是谁呀?", value: "在你们面前超帅的是谁呀?" },
          ],
          rules: [{ required: true, message: "密保问题必填", trigger: "blur" }],
        },
        {
          field: "answer",
          type: "text",
          icon: "el-icon-unlock",
          placeholder: "请输入密保答案",
          rules: [{ required: true, message: "密保答案必填", trigger: "blur" }],
        },
        {
          field: "uname",
          type: "text",
          placeholder: "请输入账号",
          icon: "el-icon-user",
          rules: [{ required: true, message: "账号必填", trigger: "blur" }],
        },
        {
          field: "pwd",
          type: "password",
          placeholder: "请输入密码",
          icon: "el-icon-unlock",
          showPassword: true,
          rules: [{ required: true, message: "密码必填", trigger: "blur" }],
        },
      ],
      // 表单按钮组

      formBtns: [{ content: "登录", type: "primary", width: "300px" }],
    };
  },
};
</script>

<style lang="scss" scoped>
 #particles-js{
    width: 100%;
    height: calc(100% - 100px);
     position: absolute;  
  }
.login {
  // background-color: cadetblue;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   background-image: url('../../assets/imgs/2.jpg');
     background-repeat: no-repeat;
     background-size: 100%,100%;
  .loginfrom {
    width: 300px;
    h1 {
      color: #fff;
      margin-bottom: 20px;
      text-align: center;
    }
  }
  ::v-deep .el-select {
    width: 100%;
  }
}
</style>
