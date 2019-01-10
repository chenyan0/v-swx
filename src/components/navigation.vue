<template>
  <div>
    <Header
      :title="title"
      :islogin="false"
    />
    <mt-tab-container
      class="page-tabbar-container"
      v-model="selected"
    >
      <mt-tab-container-item id="首页">
        <index />
        <copyright/>
        <!-- <ul>
            <router-link tag="li" :to="{path:'/onlineplan'}">计划书</router-link>
            <router-link tag="li" :to="{path:'/salary'}">薪资查询</router-link>
            <router-link tag="li" :to="{path:'/custom'}">写着玩卍</router-link>
            <router-link tag="li" :to="{path:'/setting'}">设置一下</router-link>
            </ul> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="专题">
        <topic />
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mine />
        <copyright/>
      </mt-tab-container-item>
      <mt-tab-container-item id="关于">
        <copyright/>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页">
        <div class="tab-icon">
          <font-awesome-icon icon="home" class="icon"/>
        </div>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="专题">
        <div class="tab-icon">
          <font-awesome-icon icon="comment" class="icon"/>
        </div>
        <p>专题</p>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <div class="tab-icon">
          <font-awesome-icon icon="user" class="icon"/>
        </div>
        <p>我的</p>
      </mt-tab-item>
      <mt-tab-item id="关于">
        <div class="tab-icon">
          <font-awesome-icon icon="dot-circle" class="icon"/>
        </div>
        <p>关于</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Index from "./shouwangxuan/index/index";
import Topic from "./shouwangxuan/topic/topic";
import Mine from "./shouwangxuan/mine/mine";
import Header from "./template/header";
import Copyright from "./template/copyright"
export default {
  components: {
    Index,
    Topic,
    Mine,
    Header,
    Copyright
  },
  data() {
    return {
      selected: "首页"
    };
  },
  computed: {
    title: function() {
      return this.selected;
    }
  }
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
.page-tabbar-container {
  padding-top: 40px;
  padding-bottom: 50px;
}
.mint-tabbar {
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  > .mint-tab-item,
  .mint-tab-item-label {
    color: #9babba;
  }
  > .mint-tab-item.is-selected {
    color: #495056;
    background-color: transparent;
  }
  .icon{
    height: 16px;
    width: 16px;
    margin-bottom: 4px;
  }
}
</style>

