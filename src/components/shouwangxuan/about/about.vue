<template>
  <div>
    <div class="cells">
       <router-link tag="div" :to="{path:'/onlineplan'}" class="cell">
        <span>计划书</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
       <router-link tag="div" :to="{path:'/salary'}" class="cell">
        <span>薪资查询</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
        <router-link tag="div" :to="{path:'/custom'}" class="cell"><span>我的组件库</span>
        <font-awesome-icon icon="chevron-right" />
        </router-link>
      <router-link tag="div" :to="{path:'/modifyUserInfo'}" class="cell">
        <span>修改个人资料</span>
        <font-awesome-icon icon="chevron-right" />
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
  
    methods: {}
  };
</script>

<style lang="scss" scoped>
  @import '../../../styles/util/common';
  .cells {
    margin-top: 1.25rem;
  }
  
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
</style>
