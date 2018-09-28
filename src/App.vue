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
 &.bg-f7{
   background: #f7f7f7;
 }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #333;
  margin: 0;
}
</style>
