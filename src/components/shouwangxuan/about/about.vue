<template>
  <div>
    <div class="cells">
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>修改个人资料</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
         <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>修改密码</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
         <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>我的足迹</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
        <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>订阅的专题</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
         <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>意见反馈</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
    </div>
    <div class="sign-out">
      <button
      @click="signOut"
          id="signout"
        >退出登录</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
  export default {
    data() {
      return {}
    },
  
    methods: {
      ...mapActions(["LogOut"]),
      signOut(){
        this.$store.dispatch('LogOut').then(() => {
          this.$router.push('login')
        }).catch(()=>{

        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '~@/styles/util/common';
  $colors:
  #118fff
  #246FE2   //按钮
  #5f7c8b  //wenzi
  ;

  .cells {
    margin-top: 1.25rem;
  .cell {
    background: #fff;
    margin-top: .625rem;
    padding: .625rem .9375rem;
    display: flex;
    justify-content: space-between;
   
    svg{
color: #c7c7c7;
    }
  }
  }
  .sign-out{
margin: .9375rem;
         button {
        width: 100%;
        height: 2.5rem;
        border-radius: 1.25rem;
        background: nth($list: $colors, $n:2 );
        border: 0;
        outline: none;
        @include font-dpr(18px);
        color: white;
        display: block;
      }
      #signout {
        border: 1px solid nth($list: $colors, $n:2 );
        background: transparent;
        color: nth($list: $colors, $n:2 );
      }
  }

</style>
