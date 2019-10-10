<template>
        <ul class="activity-list">
            <li v-for="(i,index) in list" :key="i.id">
  
              <router-link :to="{path:'/detail'}" v-if="(index/2)==0">
                <div class="type-1">
                  <div class="box-title">
                    <img :src="i.post_thumbnail_image" alt="">
                    <p>你关注的 <span>{{i.name}}</span> 发新文章了 </p>
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
</template>
<script>
  import {
    Indicator,
    Toast
  } from 'mint-ui';
   import {
    getRecommendApi
  } from '@/api/login'
export default {
   data(){
       return{

           list:[]
       }
   } ,
    created() {
      this.fetchData()
    },
   methods:{
         fetchData(t) {
        Indicator.close();
        Indicator.open({
          text: 'Loading...',
          spinnerType: 'fading-circle'
        });
        getRecommendApi().then(res => {
          Indicator.close();
          this.list = res.data.data;
        }, err => {
          console.log(err);
        }).catch(error => {
          console.log(err);
        })
      }
   }
}
</script>
<style lang="scss" scoped>
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
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
  }
</style>

