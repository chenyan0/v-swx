<template>
  <div id="app">
  
      <keep-alive>
        <router-view class="Router" v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view class="Router" v-if="!$route.meta.keepAlive"></router-view>
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
  computed: {
    title: function() {
      return this.$route.meta.title;
    }
  }
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
