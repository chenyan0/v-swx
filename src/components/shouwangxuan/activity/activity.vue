<template>
  <div>
    <div class="activity-block">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">动态</mt-tab-item>
        <mt-tab-item id="2">推荐</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <ul>
            <router-link :to="{path:'/detail'}" tag="li" v-for="i in list" :key="i.id">{{i.post_title}}</router-link>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul>
            <router-link :to="{path:'/detail'}" tag="li" v-for="i in list" :key="i.id">{{i.post_title}}</router-link>
          </ul>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
  import {
    Indicator,
    Toast
  } from "mint-ui";
  import {
    mapGetters
  } from 'vuex'
  import {
    getHotListApi
  } from '@/api/login'
  import utils from '@/utils/config'
  export default {
    data() {
      return {
        utils,
        selected: "1",
        avatorUrl: "",
        list: []
      };
    },
    beforeCreate() {
      document.getElementsByTagName("body")[0].className = "bg-f7"
    },
    created() {
      this.fetchData(this.selected)
    },
    watch: {
      selected: function() {
        this.fetchData(this.selected)
      }
    },
    methods: {
      fetchData(t) {
        Indicator.close();
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });
        getHotListApi({
          t: t
        }).then(res => {
          Indicator.close();
          this.list = res.data.data;
        }, err => {
          console.log(err);
        }).catch(error => {
          console.log(err);
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  .activity-block {
    .mint-navbar {
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
      position: relative;font-weight: bold;
      color: #5787d0;
      &:after{
            content: "";
    width: 30px;
    border-bottom: 2px solid #5787d0;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -15px;
      }
    }
  }
  
  ul {
    padding: 0 15px 0 30px;
    list-style: decimal;
    li {
      margin-top: 10px;
      font-size: 16px;
    }
  }
</style>


