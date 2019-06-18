<template>
  <div class="wrapper">
    <div class="inner">
      <div class="title">
        <img
          src="../../../../static/img/login/logo.png"
          alt=""
        >
      </div>
      <div class="login">
        <div class="form">
          <div class="form-group">
            <label>
              <font-awesome-icon icon="user" /></label>
             <div class="form-input"> <input
              type="text"
              v-model="fullname"
              placeholder="测试账号admin"
            >

          </div>
          </div>
          <div class="form-group">
            <label>
              <font-awesome-icon icon="key" /></label>
              <div class="form-input">

            <input
              v-model="password"
              ref="pass"
              :type="passVisible ? 'text' : 'password'"
              placeholder="测试密码123456"
            >
              <font-awesome-icon icon="eye" class="isVisible" v-if="!passVisible" @click="toggle"/>
              <font-awesome-icon icon="eye-slash" class="isVisible" v-if="passVisible"  @click="toggle"/>
              </div>
          </div>
        </div>
        <button
          @click="login"
          id="signin"
        >登陆</button>
        <button
          @click="register"
          id="signup"
        >注册</button>
      </div>
      <router-link
        class="link-to-another"
        tag="div"
        :to="{path:'forgetPassword'}"
      >
        忘记密码 ?
      </router-link>
    </div>
    <v-load v-if="loading"></v-load>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import { Toast } from "mint-ui";
import VLoad from "@/components/common/loading";
export default {
  components: {
    VLoad
  },
  data() {
    return {
      password: "",
      fullname: "",
      passVisible:false
    };
  },
  computed: {
    ...mapState({
      loading: state => state.Com.loading,
    }),
  },
  methods: {
    ...mapActions([ "setLoadingState,LoginByUsername"]), //分发dispatch
    register() {
      this.$router.push("register");
    },
    toggle(){
      this.passVisible=!this.passVisible
    },
      
    login() {
      //登录操作
      if (!this.fullname || !this.password) {
        Toast({
          message: "请填写完整",
          position: "top"
        });
        return;
      }
      let data = {
        fullname: this.fullname,
        password: this.password,
      };
      this.$store.dispatch("LoginByUsername", data).then(res => {
        console.log(res)
        if(res.data.status){
            let redirect = decodeURIComponent(
              this.$route.query.redirect || "/home"
            );
            this.$router.push({
              path: redirect
            });
          }else{
            Toast({
              message: res.data.message,
              position: "top"
            });
          }
      }).catch((err)=>{
        console.log(err)
      }); 
    }
  },
  created(){
    this.$store.dispatch("setLoadingState", false); 
  },
};
</script>
<style lang="scss" scoped>
@import "../../../styles/base";
$colors:
  #118fff
  #246FE2   //按钮
  #5f7c8b  //wenzi
  ;

.wrapper {
  .inner {
    background-color: rgba(255, 255, 255, 0.8);
    height: 100vh;
    position: absolute;
    width: 100%;
  }
  background-image: url("../../../../static/img/login/bg.jpg");
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
          display: flex;
      & > label {
        font-size:16px;
        width: 30px;
        display: inline-block;
        text-align: center;
        height: 30px;
        line-height: 30px;
        border: 1px solid nth($list: $colors, $n:1 );
        border-radius: 50%;
        color: nth($list: $colors, $n:1 );
            margin-right: 10px;
      }
      .form-input{
        border-bottom: 1px solid nth($list: $colors, $n:1 );
        width:calc(100% - 50px);
        height: 30px;
        display: flex;
    align-items: center;
      input {
        border: 0;
        background-color: transparent;
        height: 30px;
        outline: none;
        font-size: 16px;
        padding-left: 10px;
        flex: 1;
         color:nth($list: $colors, $n:3)
      }
      .isVisible{
        font-size: 13px;
        color:nth($list: $colors, $n:3)
      }
      }
    }
    button {
      width: 100%;
      height: 40px;
      border-radius: 20px;
      background: nth($list: $colors, $n:2 );
      border: 0;
      outline: none;
      font-size: 18px;
      color: white;
      display: block;
      margin-bottom: 10px;
    }
    #signup {
      border: 1px solid nth($list: $colors, $n:2 );
      background: transparent;
      color: nth($list: $colors, $n:2 );
    }
  }
  .link-to-another {
    color: nth($list: $colors, $n:2 );
    font-size: 14px;
    text-align: center;
  }
}
</style>