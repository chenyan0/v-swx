<template>
  <div>
    <div class="activity-block">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1" @click.native="selectChange('ActivityList')">动态</mt-tab-item>
        <mt-tab-item id="2" @click.native="selectChange('RecommendList')">推荐</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="selected">
          <component :is="currentView" keep-alive></component>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import ActivityList from '@/components/shouwangxuan/activity/activity-list.vue'
import RecommendList from '@/components/shouwangxuan/activity/recommend-list.vue'

  export default {
    components:{
      ActivityList,
      RecommendList
    },
    data() {
      return {
        selected: '1',
        currentView:'ActivityList',
      };
    },
    beforeCreate() {
      document.getElementsByTagName('body')[0].className = 'bg-f7'
    },
    methods: {
     selectChange(view){
       this.currentView=view
     },
    }
  };
</script>

<style lang="scss" scoped>
  .activity-block {
    .mint-navbar {
      position: fixed;
      width: 100%;
      z-index: 100;
      border-bottom: 1px solid #eee;
      .mint-tab-item {
        background: #fff;
        color: #9babba;
        text-align: center;
        box-sizing: border-box;
        margin-bottom: 0;
      }
      .mint-tab-item-label {
        font-size: 16px!important;
      }
    }
    .mint-tab-item.is-selected {
      border-bottom: 0;
      color: #495056;
      position: relative;
      font-weight: bold;
      color: #5787d0;
      &:after {
        content: "";
        width: 30px;
        border-bottom: 2px solid #5787d0;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -15px;
      }
    }
    .mint-tab-container {
      padding-top: 46px;
    }
  }
</style>


