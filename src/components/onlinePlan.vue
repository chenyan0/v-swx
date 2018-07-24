<template>
  <div>
      <mt-swipe :auto="0" class="banner">
        <mt-swipe-item v-for="item in items" :key=item.id> 
          <a :href="item.href">
            <img :src="item.url" :alt="item.title">
          </a>
        </mt-swipe-item>
      </mt-swipe>
      <ul class="types">
        <router-link to="helloworld" v-for="type in types" :key=type.id>
          <img :src="type.url" alt="" >
        </router-link>
      </ul>
      <div>
        <h1>热销产品</h1>
    <ul class="pro-list" >
      <li v-for="h in hots" :key=h.id >
      <router-link to="jiaying">
        <img :src="h.url" alt=""  width="100" height="70">
        <div>
        <h2>{{h.title}}</h2>
        <p><span>保证给付</span> | <span>灵活领取</span> | <span>保费豁免</span></p>
        </div>
      </router-link>
      </li>
    </ul>
      </div>
  </div>

</template>
<script>     
export default {
  data(){
    return{
      items:[{
        title:'中银三星尊享家盈二号终身寿险',
        href:'/jiaying',
        url:require('../assets/banner/jybanner.png')
      },
      {
        title:'中银聚富年金保险',
        href:'',
        url:require('../assets/banner/jfbanner.png')
      },
      {
        title:'中银祥佑尊享版终身重大疾病保险',
        href:'',
        url:require('../assets/banner/xybanner.png')
      },
      {
        title:'中银乐享金生终身养老年金保险',
        href:'',
        url:require('../assets/banner/lxbanner.png')
      }],
      types:[{
        url:require('../assets/type_cf.png')
      },{
        url:require('../assets/type_jk.png')
      },
      {
        url:require('../assets/type_yl.png')
      },{
        url:require('../assets/type_zn.png')
      }],
      hots:[{
        title:'中银三星尊享家盈二号终身寿险',
        href:'',
        url:require('../assets/jyimg.png')
      },
      {
        title:'中银聚富年金保险',
        href:'',
        url:require('../assets/jfimg.png')
      },
      {
        title:'中银祥佑尊享版终身重大疾病保险',
        href:'',
        url:require('../assets/xyimg.png')
      },
      {
        title:'中银乐享金生终身养老年金保险',
        href:'',
        url:require('../assets/lximg.png')
      }]

    }
  }
}
</script>
<style lang="scss" scoped>
@import '../styles/base.scss';
.banner {
    width: 100%;
    height: 130px;
  img{
    width: 100%;
    height: 100%;
  }
}
.types{
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
        border-bottom: 10px solid #eee;
    a{
      width: 23%;
      img{
        object-fit: contain;
        width:100%;
      }

    }
}
h1{
  font-size: 18px;
     border-left: 3px solid #f87d7c;
    padding-left: 10px;
    font-weight: normal;
        margin-left: 10px;
}
.pro-list {
  padding:0 10px;
li{
      padding: 10px 0;
   
      position: relative;
      a{
   text-decoration: none;
     display: flex;
  flex-direction: row;
  align-items: self-start;
  justify-content: left;
      }
      &:first-child{
            padding-top: 0;
      }
      &:after{
           content: ' ';
    border-bottom: 1px solid #f7f7f7;
    height: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
      }
      div{
        flex:1; 
        margin-left: 20px;
        h2{
    font-size: 18px;
    margin:0;
    color: #333;
    font-weight: normal;
  }
  span{
    color:#999;
    font-size: 14px;
  }
      }
 
  }
}


</style>