<template>
    <div class="header">
        <div id="left">
              <router-link  v-if="islogin" :to="{path:'/login'}">登录</router-link>
        </div>
        <div id="middle" v-if="title ? true : false">
            {{title}}
        </div>
        <div id="right">
           ...
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        title:{
            type:String,
            default:"",
        },
        islogin:{
            type:Boolean,
            default:"",
        }
    }
}
</script>
<style lang="scss" scoped>
.header{
    width: 100%;
    display: flex;
    align-items: center;
      justify-content: space-between;
    background: -webkit-linear-gradient(left, rgba(103, 81, 239, 0.8), #b148e0);
    line-height: 40px;
    color: #fff;
    #middle{
        font-size: 16px;
    }
    #left,#right{
        margin: 0 10px;
    }
}
</style>


