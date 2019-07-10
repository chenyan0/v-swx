<template>
  <div>
    <Header :title="title" isBack></Header>
    <div class="main-container">
      <div class="top">
        <img src="../../../../static/img/banner/timg1.jpeg" alt="">
        <h1>{{ $route.query.search ? "搜索关键字：" : ''}}<span ref="key"></span></h1>
        <span ref="desc"></span>
      </div>
      <Article-List :data="list" />
    </div>
  
  </div>
</template>

<script>
  import {
    Indicator
  } from "mint-ui";
  import {
    getListApi
  } from "@/api/login"
  import ArticleList from "../../template/articleList";
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
    watch: {
  
    },
    created() {
      const {
        params,
        query
      } = this.$route
      this.$nextTick(() => {
        this.$refs.key.innerHTML = query.search || params.name
        this.$refs.desc.innerHTML = params.desc ? params.desc : "本搜索是全文搜索"
      });
      this.fetchData()
    },
    beforeRouteEnter(to, from, next) {
      if (to.query.search) {} else if (to.params.id) {}
      next(vm => {})
    },
    computed: {
      title: function() {
        let t = this.$route.query.search ? "搜索词:" + this.$route.query.search : this.$route.params.name
        return t
      }
    },
    methods: {
      fetchData() {
        Indicator.close();
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });
        getListApi().then(res => {
          this.list = res.data.data
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

