<template>
  <div id="app">
    <!-- <router-view name="header" title="首页"></router-view> -->
    <!-- <transition
      :name="transitionName"
      mode="out-in"
    > -->
      <!-- 命名路由  -->
        <router-view class="Router"></router-view>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right"
    };
  },
  // watch: {
  //   //使用watch 监听$router的变化
  //   $route(to, from) {
  //     let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
  //     if (isBack) {
  //       this.transitionName = "slide-right";
  //     } else {
  //       this.transitionName = "slide-left";
  //     }
  //   }
  // }
};
</script>
<style lang="scss">
@import "./styles/base";
.Router {
  width: 100%;
  transition: all 0.5s ease;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100% 0);
}
body {
  margin: 0 !important;
  min-height: 100vh;
  background: #fff;
  // background: url("../static/img/ft_bg.png") no-repeat bottom center;
  background-size: contain;
  &.bg-fff {
    background: #fff;
  }
  &.bg-f7 {
    background: #f7f7f7;
  }
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  margin: 0;
}
</style>
