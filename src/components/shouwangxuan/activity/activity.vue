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
          <ul class="activity-list">
            <li v-for="(i,index) in list" :key="i.id">
  
              <router-link :to="{path:'/detail'}" v-if="(index/2)==0">
                <div class="type-1">
                  <div class="box-title">
                    <img :src="i.post_thumbnail_image" alt="">
                    <p>你关注的 <span>李飞</span> 发新文章了 </p>
                  </div>
                  <div class="box-content">
                    <p class="pulish-title">改变世界的万物图典，3000幅图里的发明与冒险</p>
                    <p class="pulish-time">{{i.date}}</p>
                  </div>
                </div>
              </router-link>
              <router-link :to="{path:'/detail'}" v-else>
                <div class="type-2">
                  <div class="box-title">
                    <img :src="i.post_thumbnail_image" alt="">
                    <p>你订阅的专题 <span>心情物语</span> 更新了 </p>
                  </div>
                  <div class="box-content">
                    <p class="pulish-title">{{i.post_title}}{{i.post_title}}{{i.post_title}}</p>
                  </div>
                </div>
              </router-link>
            </li>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <ul class="tj-list">
  
            <li v-for="(i,index) in list" :key="i.id">
              <div class="box-title">
                <span>
                    <img :src="i.post_thumbnail_image" alt="">
                  <span>小鱼儿</span>
                </span>
                <button>关注</button>
              </div>
              <div class="box-content">
                <b>最新发表：</b>说到英语，一定是大家所最不想听的。其实我一直认为程序员学习英语是简单的，因为我们工作中是一直接触着英语，并且看懂技术文章，文档所需要的单词量是极少的
              </div>
            </li>
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
  
  .activity-list {
    padding: 0 15px;
    li {
      margin-top: 5px;
      font-size: 14px;
      list-style: none;
      background: #fff;
      padding: 10px;
      border-radius: 4px;
      .box-title {
        display: flex;
        align-items: center;
        span {
          color: #5787d0;
        }
        p {
          flex: 1;
          padding-left: 10px;
        }
      }
      .box-content {
        .pulish-title {
          padding: 4px;
          background: #f7f7f7;
          margin: 5px 0;
        }
      }
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
  }
  
  .tj-list {
        padding: 5px 15px;
    li {
      padding: 10px;
      list-style: none;
      /* margin-bottom: 10px; */
      background: #fff;
      font-size: 14px;
      border-bottom: 2px dashed #f3f3f3;
      &:last-child{
        border-bottom: 0;
      }
    }
    .box-title {
      display: flex;
      align-items: CENTER;
      justify-content: space-between;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        vertical-align: middle;
      }
      button {
        background: #FF9800;
        color: #fff;
        border: 0;
        outline: none;
        border-radius: 4px;
      }
    }
    .box-content {
      background: #f7f7f7;
      padding: 3px 5px;
      margin: 5px 0;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 2;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      b {
        color: #FF9800;
      }
    }
  }
</style>


