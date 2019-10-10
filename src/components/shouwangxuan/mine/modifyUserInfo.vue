<template>
  <div class="wrapper">
    <Header :title="$route.meta.title" :islogin="false" isBack/>
    <div class="edit-avatar">
      <div class="avator">
        <input type="file"  name="avator"  ref="file" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">
        <img :src="userinfo.avator" alt="">
      </div>
      <span class="edit-trigger">
             <font-awesome-icon :icon="['fas', 'edit']" />
          </span>
    </div>
    <div class="edit-info">
      <h1>基本信息</h1>
      <div class="form-group">
        <input type="text" v-model="userinfo.fullname" placeholder="用户名">
      </div>
      <div class="form-group">
        <input type="email" v-model="userinfo.email" placeholder="邮箱">
      </div>
      <div class="form-group">
        <input type="number" v-model="userinfo.mobile" placeholder="手机号">
      </div>
      <button @click="submit">确定</button>
    </div>
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  import {
    mapActions,
    mapGetters
  } from "vuex"
  import {
    getUserInfoApi,updateUserInfoApi
  } from '@/api/login'
  import utils from '@/utils/config'
  import Header from "@/components/template/header"
  export default {
    components: {
      Header
    },
    data() {
      return {
        utils,
      }
    },
    computed: {
      ...mapGetters({
        userinfo: "userInfo"
      }),
      
    },
    methods: {
      changeImage(e) {
        let file = e.target.files[0]
        this.file = file
        let reader = new FileReader()
        let that = this
        reader.readAsDataURL(file)
        reader.onload = function(e) {
          that.info.avator = this.result;
        }
      },
      submit() {
        let obj = new FormData()
        obj.append("id", localStorage.getItem('id'))
        obj.append("avator", this.$refs.file.files[0])
        obj.append("fullname", this.info.fullname)
        obj.append("email", this.info.email)
        obj.append("mobile", this.info.mobile)
        updateUserInfoApi(obj).then(res => {
          console.log(res)
           Toast({
              message: res.data.message,
            });
        })
      }
    },
  
    beforeCreate() {
      document.getElementsByTagName("body")[0].className = "bg-fff";
    }
  };
</script>

<style lang="scss" scoped>
  @import "~@/styles/base";
  $colors: #118fff #5787d0 //按钮
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



