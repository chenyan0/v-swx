<template>
  <div class="wrapper">
    <div class="wrapper-navigate">
      <div class="v-menu">
        <div class="navigate-group">组件</div>
        <div class="v-menu-item-group-title">操作反馈</div>
        <router-link to="/custom/toast" class="v-menu-item">Toast 轻提示</router-link>
        <router-link to="/custom/dialog" class="v-menu-item">Dialog 对话窗</router-link>
        <router-link to="/custom/message" class="v-menu-item">Message 全局提示</router-link>
        <div class="v-menu-item-group-title">基础</div>
        <router-link to="/custom/button" class="v-menu-item">Button 按钮</router-link>
        <router-link to="/custom/tree" class="v-menu-item">Tree 树</router-link>
        <router-link to="/custom/card" class="v-menu-item">Card 卡片</router-link>
        <div class="v-menu-item-group-title">表单</div>
        <router-link to="/custom/form" class="v-menu-item">Form 表单</router-link>
        <router-link to="/custom/select" class="v-menu-item">Select 选择器 </router-link>
        <div class="v-menu-item-group-title">导航</div>
        <router-link to="/custom/pages" class="v-menu-item">Page 页码</router-link>
      </div>
    </div>
    <div class="wrapper-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .wrapper-navigate {
      display: block;
      width: 16%;
      float: left;
      .v-menu {
        color: #515a6e;
        .navigate-group {
          font-size: 16px;
          margin: 8px 0;
          padding-left: 15px;
        }
        .v-menu-item-group-title {
          height: 48px;
          line-height: 48px;
          font-size: 14px;
          padding-left: 28px;
          color: #999;
        }
        .v-menu-item {
          padding: 14px 24px;
          position: relative;
          cursor: pointer;
          z-index: 1;
          transition: all .2s ease-in-out;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-left: 34px;
          display: block;
          outline: 0;
          list-style: none;
          font-size: 14px;
          border-right: 2px solid transparent;
          &.active {
            color: #2d8cf0;
            background: #f0faff;
            border-right: 2px solid #2d8cf0;
          }
        }
      }
    }
    .wrapper-content {
      float: left;
      display: block;
      width: 70%;
      border-left: 1px solid #dcdee2;
      height: 100vh;
      .section {
        margin: 20px;
        padding: 10px 0;
      }
    }
  }
</style>


