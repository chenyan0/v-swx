<template>
  <div>
      <Header
      :title="title"
      isBack
    ></Header>
    <div class="main-container">

    <div class="top">
      <img
        src=""
        alt=""
      >
      <h1>搜索关键字：<span ref="key"></span></h1>
      <span>全局搜索</span>
    </div>
    <common-list :data="list" />
    </div>

  </div>
</template>
<script>
import CommonList from "../../template/common-list";
import { Indicator } from "mint-ui";
import Header from "../../common/header";

export default {
  components: {
    CommonList,
    Header
  },
  data() {
    return {
      list: []
    };
  },
  created() {
    this.$nextTick(() => {
      this.$refs.key.innerHTML = this.$route.query.search;
    });
    this.fetchData();
  },
  computed:{
    title:function(){
      return "搜索词："+this.$route.query.search
    }
  },
  methods: {
    fetchData() {
      Indicator.close();
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      const url = "http://localhost:8000/api/post";
      const self = this;
      this.$ajax.get(url)
          .then(
            res => {
              self.list = res.data.data;
              Indicator.close();
              return res;
            },
            err => {
              console.log(err);
            }
          )
          .catch(error => {
            console.log(error);
          });
    }
  }
};
</script>
<style lang="scss" scoped>
.main-container {
    padding: 40px 0;
.top {
  height: 200px;
  background: bisque;
  h1 {
    font-size: 20px;
    margin-left: 30px;
    &+span{
    margin-left: 30px;
    padding: 8px 0;
    border-top: 1px solid #ea985d;

    }
  }
}
.common-list {
  padding: 0 15px;
}
}
</style>

