<template>
    <div>
        <ul>
            <router-link tag="li" :to="{path:'/onlineplan'}">计划书</router-link>
            <router-link tag="li" :to="{path:'/salary'}">薪资查询</router-link>
            <router-link tag="li" :to="{path:'/custom'}">写着玩卍</router-link>
            <router-link tag="li" :to="{path:'/setting'}">设置一下</router-link>
        </ul>
    </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
ul {
  padding: 0 15px;
  overflow: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 0;
  margin-top: 20px;
  li {
    list-style: none;
    line-height: 40px;
    text-align: center;
    width: 48%;
    background: #eee;
    margin: 1%;
    color: #555;
  }
}
</style>

