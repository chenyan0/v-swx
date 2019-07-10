<template>
  <div class="wrapper">
    <Header :title="$route.meta.title" :islogin="false" isBack/>
    <div class="main-content">
      <div class="form-group">
        <input type="text" v-model="form.oldPass" v-model.lazy="$v.form.oldPass.$model" placeholder="输入当前密码">
      </div>
      <div class="form-group">
        <input type="text" v-model="form.newPass" v-model.lazy="$v.form.newPass.$model" placeholder="请输入新密码">
      </div>
      <div class="form-group">
        <input type="text" v-model="form.repeatPass" v-model.lazy="$v.form.repeatPass.$model" placeholder="请确认新密码">
      </div>
      <button @click="submit">确定</button>
    </div>
  
  
  
  
  </div>
</template>

<script>
  import {
    Toast
  } from 'mint-ui'
  import {mapGetters} from 'vuex'
 import {
    updateUserPassApi
  } from '@/api/login'
  import utils from '@/utils/config'
  import Header from "@/components/template/header"
  import {
    required,
    minLength,
    maxLength,
    between,
    sameAs
  } from 'vuelidate/lib/validators'
  export default {
    components: {
      Header
    },
    data() {
      return {
        utils,
        form: {
          oldPass: "",
          newPass: "",
          repeatPass: ""
        },
      }
    },
    validations: {
      form: {
        oldPass: {
          required,
        },
        newPass: {
          required,
          minLength: minLength(8)
        },
        repeatPass: {
          sameAsPassword: sameAs('newPass')
        }
      }
    },
  computed: {
     ...mapGetters({
        base: "userInfo"
      }),
    },
  
    methods: {
      submit() {
        console.log(this.base)
         if (!this.$v.form.oldPass.required) {
          Toast({
            message: '密码不能为空',
          })
          return
        }
        if (this.$v.form.newPass.minLength) {
          Toast({
            message: `新密码不能小于${this.$v.form.newPass.$params.minLength.min}位`,
          })
          return
        }
         if (!this.$v.form.repeatPass.sameAsPassword) {
          Toast({
            message: '两次输入的密码不一样',
          })
          return
        }
        this.form= Object.assign({}, this.form, {id:this.base.id })
        console.log(this.form)
        updateUserPassApi(this.form).then(res =>{
          Toast({
            message: res.data.message,
          });
        }).catch(err => {
          Toast({
            message: err,
            iconClass: "icon icon-error"
          });
        })
      }
    },
    mounted() {
  
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
    .main-content {
      padding: 60px 30px 30px;
      .form-group {
        margin-bottom: 15px;
        color: #181a1d;
        &>input {
          background-color: white;
          height: 40px;
          outline: none;
          font-size: 14px;
          width: 100%;
          border: 1px solid rgba(181, 181, 181, 0.4);
          color: nth($list: $colors, $n:3);
          border-radius: 6px;
          padding-left: 8px;
          box-sizing: border-box;
          transition: all .3s ease;
          &:focus {
            border: 1px solid #5b94ea;
            box-shadow: 0 0 3px 0px #84afef;
          }
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



