<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="scss">
body{
  margin: 0;
  min-height: 100vh;
  background: url('../static/img/ft_bg.png') no-repeat bottom center;
  background-size: contain;
 &.bg-fff{
   background: #fff;
 }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 0;
}
</style>
