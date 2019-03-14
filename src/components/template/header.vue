<template>
    <div class="header">
        <div id="left" @click="back()">
            <font-awesome-icon icon="chevron-left" v-if="isBack" />
            <router-link  v-if="islogin" :to="{path:'/login'}">登录</router-link>
        </div>
        <div id="middle" v-if="title ? true : false">
            {{title}}
        </div>
        <div id="right">
            <font-awesome-icon icon="address-book" v-if="isRight"/>
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
            default:false,
        },
        isBack:{
            type:Boolean,
            default:false,
        },
        isRight:{
            type:Boolean,
            default:false,
        }
    },
    methods:{
        back(){
            window.history.go(-1)
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
    background:#246FE2;
    line-height: 40px;
    color: #fff;
    position: fixed;
    top: 0;
    z-index: 3;
    #middle{
        font-size: 16px;
    }
    #left,#right{
        margin: 0 10px;
    }
}
</style>


