<template>
  <div>
    <Header :title="title" isBack></Header>
    <div class="main-container">
      <div class="top">
        <img src="../../../../static/img/banner/timg1.jpeg" alt="">
        <h1>搜索关键字:<span ref="key"></span></h1>
        <span ref="desc">本搜索是全文搜索</span>
      </div>
      <Article-List :data="list" v-if="list.length"/>
      <div v-else class="default-none">
        <img src="../../../../static/img/none.jpg" alt="">
        <p>啥也没找到</p>
      </div>
    </div>
  
  </div>
</template>

<script>
  import {
    Indicator
  } from "mint-ui";
  import {
    searchApi
  } from "@/api/login"
  import ArticleList from "../../template/cateDetailList";
  import Header from "../../template/header";

  
  export default {
    components: {
      ArticleList,
      Header
    },
    data() {
      return {
        list: [],
        source: ''
      };
    },
     beforeCreate() {
    document.getElementsByTagName("body")[0].className = "bg-fff";
  },
    created() {
      const {
        params,
        query
      } = this.$route
      this.$nextTick(() => {
        this.$refs.key.innerHTML = query.val 
      });
      this.fetchData()
    },
    beforeRouteEnter(to, from, next) {
      if (to.query.val) {} else if (to.params.id) {}
      next(vm => {})
    },
    computed: {
      title: function() {
        return    "搜索词:" + this.$route.query.val 
      }
    },
    methods: {
      fetchData() {
        Indicator.close();
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });
        searchApi({'text':this.$route.query.val}).then(res => {
          this.list=res.data
          Indicator.close();
        }, err => {
          console.log(err);
        }).catch(err => {
          console.log(err);
        })
      }
    },
  
  };
</script>

<style lang="scss" scoped>
.default-none{
  margin-top: 20px;
  text-align: center;
  img{
    width: 50%;

  }
  p
  {
    font-size: 14px;
    margin-top: 15px;
  }
}
  .main-container {
    padding: 0;
    .top {
      height: 160px;
      position: relative;
      color: #fff;
      img {
        width: 100%;
        position: absolute;
        top: 0;
        z-index: -1;
        height: 100%;
        object-fit: cover;
        filter: blur(3px);
      }
      h1 {
        font-size: 20px;
        margin: 0;
        padding: 40px 30px 20px;
        &+span {
          margin-left: 30px;
          padding: 8px 0;
          border-top: 1px solid #fff;
        }
      }
    }
    .common-list {
      padding: 0 15px;
    }
  }
</style>

