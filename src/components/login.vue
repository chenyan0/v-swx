<template>
    <div class="wrapper">
        <div class="title">
            <span class="back" @click="back">&lt;</span>
            <span class="title">登录</span>
        </div>
        <div class="login">
            <div class="username">
                <label>账 号</label>
                <input type="text" v-model="username" placeholder="测试账号admin">
            </div>
            <div class="password">
                <label>密 码</label>
                <input v-model="password" type="password" placeholder="测试密码123456">
            </div>
            <!-- <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field> -->
            <button @click="login">登录</button>
        </div>
    </div>
</template>
<script>
import { requestLogin } from "../api/api";
import { mapActions } from "vuex";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    back() {
      this.$router.go("-1");
    },
    ...mapActions(
      [
        'setUserData','setUserInfo',
      ]
    ),

    login() {
      //登录操作
      if (!this.username || !this.password) {
        Toast({
          message: "请填写完整",
          iconClass: "icon icon-error",
          position: "top"
        });
        return;
      }
      let data = {
        username: this.username,
        password: this.password
      };
      
      console.log(this.$store)
      // this.$router.push('/');
        this.$store.dispatch("setLoadingState", true); //设置loading状态
        requestLogin(data).then(res => {
          console.log(res);
          if(res){
              Toast({
                  message: res.data,
                  iconClass: 'icon icon-error'
                  });
              this.$store.dispatch("setLoadingState", false);
          }
         else{
              this.setUserInfo(data);
              this.setUserData(res);
              // this.$router.replace("/");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../styles/base";
.wrapper {
  background-color: white;
  height: 100vh;
  .title {
       height: 32vh;
    background-color: #221e33;
    line-height: 40px;
    color: #fff;
    .back {
      font-size: 20px;
      margin-left: 0.3rem;
    }
    .title {
      font-size: 18px;
      position: absolute;
      left: 45%;
    }
  }
  .login {
    margin:0 30px;
    .username,
    .password {
      margin: 10px;
      border-bottom: 1px solid #e6eaf2;
      height: 32px;
      line-height: 32px;
          color: #2c3e50;
      & > label {
        font-size: 14px;
      }
      & > input {
        border: 0;
        background-color: white;
        height: 28px;
        outline: none;
        font-size: 14px;
        width: 78%;
        color: #99a4bf;padding-left: 10px;
      }
    }
    button {
          width: 100%;
    height: 40px;
    margin: 30px 0;
      border-radius: 20px;
      background-color: #f44336;
      border: 0;
      outline: none;
      font-size: 16px;
      color: white;
      display: block;
    }
  }
  video {
    width: 10rem;
    height: 8rem;
  }
}
</style>