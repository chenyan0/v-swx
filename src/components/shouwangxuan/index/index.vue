
<template>
  <div>
    <mt-swipe :auto="4000" class="banner">
      <mt-swipe-item
        v-for="item in items"
        :key=item.id
      >
        <a :href="item.href">
          <img
            :src="item.url"
            alt="言轩"
          >
        </a>
      </mt-swipe-item>
    </mt-swipe>
    <div class="search-form">
      <form>
        <input
          type="text"
          placeholder="搜索你感兴趣的内容..."
          class="search-input" id="search-input" ref="input"
          v-model="searchKey"
        >
        <button class="search-button" type="button" @click="formSubmit">
          <font-awesome-icon icon="search" />
        </button>
      </form>
    </div>
    <div class="top-nav">
      <div class="top-item">
        <img
          src="../../../../static/img/images/nav-icon1.png"
          alt=""
        >
        <p>微慕</p>
      </div>
      <div class="top-item">
        <img
          src="../../../../static/img/images/nav-icon2.png"
          alt=""
        >
        <p>企业版</p>
      </div>
      <div class="top-item">
        <img
          src="../../../../static/img/images/nav-icon3.png"
          alt=""
        >
        <p>旅游版</p>
      </div>
      <div class="top-item">
        <img
          src="../../../../static/img/images/nav-icon4.png"
          alt=""
        >
        <p>图片版</p>
      </div>
      <div class="top-item">
        <img
          src="../../../../static/img/images/nav-icon5.png"
          alt=""
        >
        <p>微店</p>
      </div>
    </div>
    <div class="top-nav2">
      <router-link
        :to="{ path: '/hot'}"
        class="top-Nav2-item"
      >
        <span class="top-Nav2-item-word">排行榜单</span>
      </router-link>
      <div class="top-Nav2-item2">
        <span class="top-Nav2-item-word">微信小程序</span>
      </div>
    </div>
    <div class="container">
      <div class="index-container">
        <Article-List :data="list" />
      </div>
    </div>

  </div>
</template>
<script>
import ArticleList from "../../template/articleList";
import { Indicator,Toast } from "mint-ui";
export default {
  components: {
    ArticleList,
  },
  data() {
    return {
      items: [
        {
          href: "",
          url: require("../../../../static/img/banner/timg1.jpeg")
        },
        {
          href: "/jiaying",
          url: require("../../../../static/img/banner/timg2.jpeg")
        },
        {
          href: "",
          url: require("../../../../static/img/banner/timg3.jpeg")
        }
      ],
      curpage: 1,
      searchKey:'',
      list: []
    };
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
        this.$axios
          .get(url)
          .then(
            res => {
              self.list.push(...res.data.data) ;
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
    },
    formSubmit(){
      if(!this.searchKey){
        Toast('提交信息为空')
      }else{
        this.$router.push({ path: '/list', query: { search: this.searchKey }})
        this.searchKey=''
      }
    }
  },
  created() {
    this.fetchData();
  },
  beforeCreate() {
    document.getElementsByTagName("body")[0].className = "bg-fff";
  },


};
</script>
<style lang="scss" scoped>
@import "~@/styles/util/layout";
.banner {
  height:130px;
  img {
      width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .mint-swipe-indicators{
    bottom: 0;
  }
}
form {
  display: flex;
  flex-direction: row;
  background-color: #eee;
  padding: 8px;
  .search-input {
    background-color: #fff;
    padding: 3px 0 3px 10px;
    min-height: 1rem;
    font-size: 14px;
    border-bottom-left-radius: 4px;
    border-top-left-radius: 4px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border: 0;
    height: 26px;
    width: 80%;
    text-align: left;
    box-shadow: 1px 1px 6px #ecf0f0;
    outline: none;
  }
  .search-button {
    border: 0;
    background-color: #fff !important;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    color: #959595;
    width: 20%;
    margin: 0 !important;
    padding: 3px 0;
    box-shadow: 1px 1px 6px #ecf0f0;
    outline: none;
  }
}
.top-nav {
  display: flex;
  padding: 12px 0;
  background: #fff;
  justify-content: space-around;
  .top-item {
    text-align: center;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      line-height: 20px;
      font-size: 14px;
      color: #4c4c4c;
      font-weight: 500;
    }
  }
}
.top-nav2 {
  display: flex;
  flex-direction: row;
  padding: 12px;
  background: #fff;
  justify-content: space-between;
  border-bottom: 10px solid #eee;
  .top-Nav2-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 80px;
    border-radius: 6px;
    background-image: url(http://wx2.sinaimg.cn/mw690/d0cdcf72gy1fxkemocghrj209f04gmx2.jpg);
    background-size: 100%;
  }
  .top-Nav2-item2 {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 80px;
    border-radius: 6px;
    background-image: url(http://wx2.sinaimg.cn/mw690/d0cdcf72gy1fxkemkkrkbj209f04g3yp.jpg);
    background-size: 100%;
  }
  .top-Nav2-item-word {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: 10px;
    font-size: 12px;
    font-weight: 500;
    height: 30px;
    width: 100px;
    background-color: #fff;
    border-radius: 15px;
    border: 1px #c4c4c4 solid;
  }
}
.container {
  padding: 0 12px;
  background-color: #fff;
  .index-container {
    background-color: #fff;
  }
}
</style>



