<template>
  <div class="wrapper">
    <div class="edit-avatar">
      <div class="avator">
        <input type="file" name="" id="" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">
        <img :src="form.avatorUrl" alt="">
      </div>
      <span class="edit-trigger">
           <font-awesome-icon :icon="['fas', 'edit']" />
        </span>
    </div>
    <div class="edit-info">
      <h1>基本信息</h1>
      <div class="form-group">
        <input type="text" v-model="form.fullname" placeholder="用户名">
      </div>
      <div class="form-group">
        <input type="email" v-model="form.email" placeholder="邮箱">
      </div>
    </div>
    <div class="edit-info private">
      <h1>私人信息</h1>
      <div class="form-group">
        <input type="password" v-model="form.password" placeholder="密码">
      </div>
      <div class="form-group">
        <input type="number" v-model="form.mobile" placeholder="手机号">
      </div>
      <button @click="submit">注册</button>
    </div>
    <router-link class="link-to-another" tag="div" :to="{path:'login'}">
      已有账户 ?
    </router-link>
  </div>
</template>

<script>
  import {
    mapActions
  } from "vuex";
  import { registerApi } from '@/api/login'
  export default {
    data() {
      return {
        form: {
          avatorUrl: "",
          fullname: "",
          email: "",
          password: "",
          mobile: ""
        }
      }
    },
    methods: {
      ...mapActions(["setUserInfo"]),
      changeImage(e) {
        let file = e.target.files[0]
        let reader = new FileReader()
        this.file = file
        // 将图片将转成 base64 格式  
        reader.readAsDataURL(file)
        let that=this
        reader.onload = function(e) {
          that.form.avatorUrl = this.result;
        }
      },
      submit() {
        const data = this.form
        registerApi(data).then(res => {
          if (!res.data.status) {
            Toast({
              message: res.data.message,
              iconClass: "icon icon-error"
            });
          } else {
            this.setUserInfo(data);
            this.$router.replace("/login");
          }
        });
      }
    },
    beforeCreate() {
      document.getElementsByTagName("body")[0].className = "bg-fff";
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../styles/base";
  $colors : #118fff #246FE2 //按钮
  #5f7c8b //wenzi
  ;
  .wrapper {
    .edit-avatar {
      height: 32vh;
      background: nth($list: $colors, $n:2);
      position: relative;
      .avator {
        width: 70px;
        height: 70px;
        overflow: hidden;
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border: 1px dashed #fff;
        border-radius: 50%;
        left: 30px;
        bottom: 30px;
        img {
          width: 100%;
          height: 100%;
        }
        [type="file"] {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          z-index: 100;
        }
      }
      .edit-trigger {
        position: absolute;
        right: 30px;
        bottom: 30px;
        color: rgba(222, 222, 222, 0.3);
        font-size: 20px;
      }
    }
    .edit-info {
      margin: 0 30px 30px;
      &.private {
        margin: 0 30px 10px;
      }
      h1 {
        color: nth($list: $colors, $n:2);
        font-size: 14px;
        font-weight: normal;
      }
      .form-group {
        margin: 10px 0;
        height: 32px;
        line-height: 32px;
        color: #181a1d;
        &>input {
          border: 0;
          background-color: white;
          height: 30px;
          outline: none;
          font-size: 14px;
          width: 100%;
          border-bottom: 1px solid rgba(0, 140, 255, 0.4);
          color: nth($list: $colors, $n:3);
        }
      }
      button {
        width: 100%;
        height: 40px;
        border-radius: 20px;
        background: nth($list: $colors, $n:2);
        border: 0;
        outline: none;
        font-size: 18px;
        color: white;
        display: block;
        margin: 30px 0 0;
      }
    }
    .link-to-another {
      color: nth($list: $colors, $n:2);
      font-size: 14px;
      text-align: center;
    }
  }
</style>



