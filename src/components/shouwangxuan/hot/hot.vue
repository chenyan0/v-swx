<template>
  <div>
    <Header title="热门" isBack></Header>
    <div class="hot-container">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">评论数</mt-tab-item>
        <mt-tab-item id="2">浏览数</mt-tab-item>
        <mt-tab-item id="3">点赞数</mt-tab-item>
        <mt-tab-item id="4">鼓励数</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">

          <Article-List :data="list" />
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <Article-List :data="list" />
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <Article-List :data="list" />
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <Article-List :data="list" />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import Header from "../../template/header";
import ArticleList from "../../template/articleList";
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
      selected: "1"
    };
  },
  watch:{
    selected:function(){
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
      const url = "http://localhost:8000/api/hotpost";
      const self = this;
        this.$axios
          .post(url,{t:t})
          .then(
            res => {
              self.list = res.data.data;
              Indicator.close();
            },
            err => {
              console.log(err);
            }
          )
          .catch(error => {
            console.log(error);
          });
    }
  },
  created() {
    this.fetchData(this.selected)
  }
};
</script>
<style lang="scss" scoped>
.hot-container {
  padding-top: 40px;
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


