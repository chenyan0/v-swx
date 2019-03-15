<template>
  <div>
    <div class="top">
      <div class="avator">
        <input type="file" name="" id="" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">
        <img :src="avatorUrl" alt="">
      </div>
      <p ref="name" @click="jumpLink"></p>
    </div>
    <div class="mine-block">
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">浏览</mt-tab-item>
        <mt-tab-item id="2">评论</mt-tab-item>
        <mt-tab-item id="3">点赞</mt-tab-item>
        <mt-tab-item id="4">鼓励</mt-tab-item>
        <mt-tab-item id="5">订阅</mt-tab-item>
        <mt-tab-item id="6">言论</mt-tab-item>
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
        <mt-tab-container-item id="3">
          <ul>
            <router-link :to="{path:'/detail'}" tag="li" v-for="i in list" :key="i.id">{{i.post_title}}</router-link>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <ul>
            <router-link :to="{path:'/detail'}" tag="li" v-for="i in list" :key="i.id">{{i.post_title}}</router-link>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <ul>
            <router-link :to="{path:'/detail'}" tag="li" v-for="i in list" :key="i.id">{{i.post_title}}</router-link>
          </ul>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
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
    Indicator
  } from "mint-ui";
  import {
    mapGetters
  } from 'vuex'
  
  export default {
    data() {
      return {
        selected: "1",
        avatorUrl: "",
        list: []
      };
    },
    beforeCreate() {
      document.getElementsByTagName("body")[0].className = "bg-f7"
    },
    computed: {
      ...mapGetters([
        'loginStatus',
        'userInfo'
      ])
    },
    created() {
      this.$nextTick(() => {
        this.$refs.name.innerHTML = this.loginStatus ? this.userInfo.fullname : '请登录'
        this.avatorUrl = this.userInfo.avatorUrl
      });
      this.fetchData(this.selected)
    },
    watch: {
      selected: function() {
        this.fetchData(this.selected)
      }
    },
    methods: {
      jumpLink(){
        if(!this.loginStatus){
           this.$router.push("login")
        }else{
          return
        }
      },
      changeImage(e) {
        let file = e.target.files[0];
        this.file = file;
        let reader = new FileReader();
        let that = this;
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          that.avatorUrl = this.result;
        };
      },
      fetchData(t) {
        Indicator.close();
        Indicator.open({
          text: "Loading...",
          spinnerType: "fading-circle"
        });
        const url = "http://localhost:8000/api/hotpost";
        const self = this;
        this.$axios
          .post(url, {
            t: t
          })
          .then(
            res => {
              Indicator.close();
              self.list = res.data.data;
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
  .top {
    padding: 30px 0;
    text-align: center;
    background: #246FE2;
    color: #fff;
    font-size: 14px;
    .avator {
      width: 60px;
      height: 60px;
      overflow: hidden;
      position: relative;
      margin: 0 auto 10px;
      border: 1px solid #fff;
      img {
        width: 100%;
        height: 100%;
      }
      [type="file"] {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
    }
  }
  
  .mine-block {
    .mint-navbar .mint-tab-item {
      background: #fff;
      color: #9babba;
      text-align: center;
      box-sizing: border-box;
      margin-bottom: 0;
    }
    .mint-tab-item.is-selected {
      border-bottom: 2px solid #495056;
      color: #495056;
    }
  }
  
  ul {
    padding: 0 15px 0 30px;
    list-style: decimal;
    li {
      margin-top: 10px;
      font-size: 14px;
    }
  }
</style>


