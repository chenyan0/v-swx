<template>
  <div>
    <!-- <Header
      :title="title"
      :islogin="false"
    /> -->
    <mt-tab-container
      class="page-tabbar-container"
      v-model="selected"
    >
     <mt-tab-container-item :id="selected">
       <component :is="currentView" keep-alive></component>
        </mt-tab-container-item >
    </mt-tab-container>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="首页" @click.native="selectChange('Index')">
        <div class="tab-icon">
          <font-awesome-icon icon="home" class="icon"/>
        </div>
        <p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="专题" @click.native="selectChange('Topic')">
        <div class="tab-icon">
          <font-awesome-icon icon="thumbtack" class="icon"/>
        </div>
        <p>专题</p>
      </mt-tab-item>
      <mt-tab-item id="动态" @click.native="selectChange('Activity')">
        <div class="tab-icon">
          <font-awesome-icon icon="dice-d20" class="icon"/>
        </div>
        <p>动态</p>
      </mt-tab-item>
      <mt-tab-item id="我的" @click.native="selectChange('Mine')">
        <div class="tab-icon">
          <font-awesome-icon icon="dot-circle" class="icon"/>
        </div>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import Index from "./index/index"
import Topic from "./topic/topic"
import Activity from "./activity/activity"
import Mine from "./mine/mine"
import Header from "../template/header"
import Copyright from "../template/copyright"
export default {
  components: {
    Index,
    Topic,
    Activity,
    Mine,
    Header,
    Copyright
  },
  data() {
    return {
      selected: '首页',
      currentView:'Index'
    };
  },
  
  computed: {
    title: function() {
      return this.$route.meta.title;
    }
  },
  methods:{
    selectChange(view){
this.currentView=view
    }
  },
  activated(){
    document.getElementsByTagName("body")[0].className = "bg-f7";
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
  // padding-top: 40px;
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
    color: #5787d0;
    background-color: transparent;
  }
  .icon{
    height: 16px;
    width: 16px;
    margin-bottom: 4px;
  }
}
</style>

