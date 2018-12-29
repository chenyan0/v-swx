<template>
  <div class="wrapper">
    <div class="inner">
    <div class="title">
      <img
        src="../../../static/img/login/logo.png"
        alt=""
      >
    </div>
    <div class="login">
      <div class="form">
        <div class="form-group">
          <label>
            <font-awesome-icon icon="user" /></label>
          <input
            type="text"
            v-model="fullname"
            placeholder="测试账号admin"
          >
        </div>
        <div class="form-group">
          <label>
            <font-awesome-icon icon="key" /></label>
          <input
            v-model="password"
            type="password"
            placeholder="测试密码123456"
          >
        </div>
      </div>
      <button
        @click="login"
        id="signin"
      >Sign In</button>
      <button
        @click="register"
        id="signup"
      >Sign Up</button>
    </div>
    <router-link class="link-to-another" tag="div" :to="{path:'register'}">
      Forget password ?
    </router-link>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      password: "",
      fullname: ""
    };
  },
  
  methods: {
    ...mapActions(["setUserData", "setUserInfo"]),   //分发dispatch
    register(){
     this.$router.push('register')
    },
    login() {
      //登录操作
      if (!this.fullname || !this.password) {
        Toast({
          message: "请填写完整",
          iconClass: "icon icon-error",
          position: "top"
        });
        return;
      }
      const USERINFO=this.$store.getters.userInfo;
      let data = {
        fullname: this.fullname,
        password: this.password,
        avatar: require("../../../static/img/jyimg.png")
      };
      this.$store.dispatch("setLoadingState", true); //设置loading状态
      if(this.fullname!==USERINFO.fullname||this.password!==USERINFO.password){
          Toast({
            message: "用户账号信息不匹配",
            iconClass: "icon icon-error"
          });
      }else{
        this.$ajax.post("http://localhost:8000/api/login", data).then(res => {
          if (!res.data.status) {
            Toast({
              message: res.data.message,
              iconClass: "icon icon-error"
            });
            this.$store.dispatch("setLoadingState", false);
          } else {
            this.$router.replace("/navigation");
          }
        });
      }
    }
  },
  mounted(){
     
  }

};
</script>
<style lang="scss" scoped>
@import "../../styles/base";
.wrapper {
  .inner{
        background-color: rgba(255, 255, 255, 0.9);
    height: 100vh;
    position: absolute;
    width: 100%;
  }
    background-image:url("../../../static/img/login/bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  height: 100vh;
  .title {
    line-height: 40px;
    background-size: cover;
    text-align: center;
    padding: 40px 0;
  }
  .login {
    margin: 0 30px;
    .form {
      margin-bottom: 40px;
    }
    .form-group {
      margin: 10px 0;
      height: 32px;
      line-height: 32px;
      color: #2c3e50;
      & > label {
        font-size: 14px;
        width: 30px;
        display: inline-block;
        text-align: center;
        height: 30px;
        line-height: 30px;

        border: 1px solid #5da3ff;
        border-radius: 50%;
        color: #5da3ff;
      }
      & > input {
        border: 0;
        background-color: transparent;
        height: 30px;
        outline: none;
        font-size: 14px;
        width: 78%;
        border-bottom: 1px solid rgba(0, 140, 255, 0.4);

        color: #99a4bf;
        padding-left: 10px;
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background: #118fff;
      border: 0;
      outline: none;
      font-size: 18px;
      color: white;
      display: block;
      margin-bottom: 10px;
    }
    #signup {
      border: 1px solid #008cff;
      background: transparent;
      color: #008cff;
    }
  }
  .link-to-another{
    color: #5da3ff;
    font-size: 14px;
    text-align: center;
  }
}
</style>