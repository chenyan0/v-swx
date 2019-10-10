<template>
  <div>
     <div class="top">
      <div class="avator">
        <img :src="utils.BASEURL + avatorUrl" alt="">
      </div>
      <p ref="name">{{username}}</p>
    </div>
    <div class="cells">
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>
             <font-awesome-icon icon="user-cog" class="cell-sm-icon" style="color: #5787d0;"/>修改个人资料
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
      <router-link tag="div" :to="{path:'/modifyPass'}" class="cell">
        <span>
             <font-awesome-icon icon="shield-alt" class="cell-sm-icon"  style=" color: #FF9800;"/>修改密码
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
    </div>
    <div class="cells">
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>
             <font-awesome-icon icon="heart" class="cell-sm-icon"    style=" color: #FF9800;"/>我的收藏
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>
             <font-awesome-icon icon="university" class="cell-sm-icon"    style=" color: #FF9800;"/>我的订阅
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
           <span>
             <font-awesome-icon icon="history" class="cell-sm-icon"  style="color: #5787d0;"/>我的足迹
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
     
    </div>
    <div class="cells">
          <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
           <span>
             <font-awesome-icon icon="lightbulb" class="cell-sm-icon"  style="color: #FF9800;"/>消息中心
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
       <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
         <span>
             <font-awesome-icon icon="cookie-bite" class="cell-sm-icon" style="color: #8BC34A;"/>意见反馈
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
           <span>
             <font-awesome-icon icon="sliders-h" class="cell-sm-icon"   style="color: #5787d0;"/>设置
         </span>
        <font-awesome-icon icon="chevron-right" class="arrow-right"/>
      </router-link>
    </div>
    <div class="sign-out">
      <button @click="signOut" id="signout">退出登录</button>
    </div>
  </div>
</template>

<script>
  import {
    mapActions,mapGetters
  } from 'vuex'
    import {
    getUserInfoApi,
  } from '@/api/login'
  import utils from '@/utils/config'
  export default {
    data() {
      return {
        utils,
        avatorUrl:"",
        username:'请登录'
      }
    },
    computed: {
      ...mapGetters({
      }),
      
    },
    methods: {
      ...mapActions(["LogOut"]),
      signOut() {
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push('login')
        }).catch(() => {
  
        })
      }
    },
    created(){
       getUserInfoApi({
          id: localStorage.getItem('id')
        }).then((res) => {
          if (res.status == '200') {
            this.$store.dispatch("setUserInfo",res.data)
            this.avatorUrl = res.data.avator
            this.username=res.data.fullname
          }
        }).catch(() => {})
    }

  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/util/common';
  $colors : #118fff #5787d0 //按钮
  #5f7c8b //wenzi
  ;
  .top {
    padding: 30px 0;
    text-align: center;
    background: #5787d0;
    color: #fff;
    font-size: 14px;
    .avator {
      width: 60px;
      height: 60px;
      overflow: hidden;
      position: relative;
      margin: 0 auto 10px;
      border: 1px solid #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .cells {
    margin-top: 10px;
    .cell {
      background: #fff;
      padding: 10px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      position: relative;
      &:last-child:after {
        border-bottom: 0;
      }
      &:after {
        content: "";
        position: absolute;
        left: 1rem;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid #f3f3f3;
      }
      .arrow-right {
        color: #c7c7c7;
      }
      .cell-sm-icon{
width: 1.25em;
margin-right: 1rem;
      }
    }
  }
  
  .sign-out {
    margin: 20px;
    button {
      width: 100%;
       height: 34px;
    border-radius: 17px;
      background: nth($list: $colors, $n:2);
      border: 0;
      outline: none;
      @include font-dpr(18px);
      color: white;
      display: block;
    }
    #signout {
      border: 1px solid nth($list: $colors, $n:2);
      background: transparent;
      color: nth($list: $colors, $n:2);
    }
  }
</style>
