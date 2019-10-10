<template>
  <div>
    <Header :title="$route.meta.title" isBack></Header>
    <div class="hot-container">
      <mt-navbar v-model="selected">
        <mt-tab-item id="total_comments">评论数</mt-tab-item>
        <mt-tab-item id="pageviews">浏览数</mt-tab-item>
        <mt-tab-item id="like_count">点赞数</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="total_comments">

          <Article-List :data="list" />
        </mt-tab-container-item>
        <mt-tab-container-item id="pageviews">
          <Article-List :data="list" />
        </mt-tab-container-item>
        <mt-tab-container-item id="like_count">
          <Article-List :data="list" />
        </mt-tab-container-item>
    
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Header from "../../template/header";
import ArticleList from "../../template/cateDetailList";
import {getHotListApi} from '@/api/login'
import { Indicator } from "mint-ui";
export default {
  components: {
    Header,
    ArticleList
  },
  data() {
    return {
      curpage: 1,
      list: [],
      selected: 'total_comments'
    };
  },
  watch:{
    selected:function(){
      this.fetchData(this.selected)
    }
  },
  methods: {
    fetchData(params) {
      Indicator.close();
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      getHotListApi({type:params}).then((res)=>{
        this.list = res.data
        Indicator.close();
      },err=>{
        console.log(err);
      }).catch(error => {
        console.log(error);
      })
    
    }
  },
  created() {
    this.fetchData(this.selected)
  }
};
</script>
<style lang="scss" scoped>
.hot-container {
  background-color: #fff;
  .common-list {
    padding: 0 15px;
  }
  .mint-navbar .mint-tab-item {
    background: #fff;
    color: #9babba;
    text-align: center;
    padding: 15px 0;
  }
  .mint-tab-item.is-selected {
    border-bottom: 1px solid #495056;
    color: #495056;
  }
}
</style>


