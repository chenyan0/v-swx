<template>
  <div class="page-loadmore-wrapper" ref="wrapper" >
    <mt-loadmore :auto-fill="false" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" @bottom-status-change="handleBottomChange">
      <div class="topic-common-list">
        <router-link :to="{ name: 'list', params: { id:item.t_id, name:item.t_name, desc:item.t_desc}}" tag="div" class="list-item" v-for="item in list" :key="item.id">
          <img :src="utils.BASEURL+item.t_thumbnail_image" alt="" :data-id="item.id">
          <h3 class="content-title" :data-id="item.t_id">
            <p>{{item.t_name}} </p>
            <span @click="handleOrder" :class="item.order_status ? 'ordered' : '' ">{{item.order_status ? '已订阅' : '未订阅' }}</span></h3>
          <p class="content-brief" :data-id="item.t_id">{{item.t_desc}}</p>
        </router-link>
      </div>
    </mt-loadmore>
  </div>
</template>

<script> 
import {
    getCategoryListApi
  } from "@/api/login"
  import utils from '@/utils/config'

  import Copyright from "../../template/copyright";
  import {
    Loadmore
  } from "mint-ui";
  export default {
    components: {
      Copyright
    },
    data() {
      return {
        utils,
        list: [],
        bottomStatus: "",
        allLoaded: false,
        pageNum: 1,
        wrapperHeight: 0
      };
    },
    created() {
      this.fetchData(this.pageNum);
    },
    mounted() {
      this.wrapperHeight =
        document.documentElement.clientHeight -
        this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
      loadBottom(id) {
        setTimeout(() => {
          this.pageNum++;
          this.fetchData(this.pageNum);
          if (this.pageNum >= 4) {
            this.allLoaded = true; // 若数据已全部获取完毕
          }
          this.$refs.loadmore.onBottomLoaded(id);
        }, 1500);
      },
      loadTop(id) {
        this.$refs.loadmore.onTopLoaded(id);
      },
      fetchData(page) {
        getCategoryListApi({
          pager: this.page
        }).then(res => {
          if (res.status == 200) {
            console.log(res)
            let list = res.data;
            list.map(n => this.list.push(n));
          }
        }, err => {
          console.log(err);
  
        }).catch(error => {
          console.log(error);
        })
      },
      handleOrder($event) {
        console.log($event.target);
      },
      handleBottomChange(status) {
        this.bottomStatus = status;
      }
    }
  };
</script>

<style lang="scss" scoped>
  $colors: #ffbc59;
  .page-loadmore-wrapper {
    overflow: scroll;
  }
  
  .topic-common-list {
    padding: 15px 0px;
    margin: 0 15px;
    overflow: auto;
    touch-action: none;
  }
  
  .list-item {
    width: 48%;
    margin-right: 4%;
    float: left;
    &:nth-child(even) {
      margin-right: 0;
    }
    img {
      width: 100%;
      border-radius: 12px;
      height: 150px;
    }
    .content-title {
      padding: 6px 0;
      font-size: 16px;
      line-height: 20px;
      color: #1b1b1b;
      margin: 0;
      font-weight: normal;
      display: flex;
      justify-content: space-between;
      p {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        border: 1px solid nth($list: $colors, $n:1);
        color: nth($list: $colors, $n:1);
        padding: 0 6px;
        font-size: 12px;
        float: right;
        border-radius: 4px;
        &.ordered {
          color: #fff;
          background: nth($list: $colors, $n:1);
        }
      }
    }
    .content-brief {
      padding: 0 0 4px;
      font-size: 12px;
      line-height: 20px;
      font-weight: 400;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #959595;
    }
  }
</style>

