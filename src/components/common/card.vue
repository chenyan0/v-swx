<template>
    <div class="v-card">
        <div class="v-card-title" ref="cardTitle">
            <slot name="title"></slot>
        </div>
        <div class="v-card-body" ref="cardBody">
            <slot name="img"></slot>
            <div ref="info">
                <slot></slot>
            </div>
        </div>
        <div v-if="isUsed" class="options" >
            <button>分享</button>
            <button @click="thumbUp">👍<span v-if="this.$store.getters.thumbUp">取消</span>点赞</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isUsed:this.option,
        }
    },
    props:{
        option:{
            type:Boolean,
            default:false
        }
    },
    mounted(){
        if(this.$slots.img){
            this.$refs.cardBody.style.padding='0px'
            this.$refs.info.style.padding='10px 20px'
            this.$refs.cardTitle.style.padding='0'
                
        }
    },
    methods:{
        thumbUp:function(){
            const status = this.$store.getters.thumbUp;
            this.$store.dispatch('setUserThumb',!status);   
        }
    }
}
</script>
<style lang="scss" scoped>
.v-card{
    background: #fff;
    margin: 10px 0;
    border-radius: 4px;
    transition: all .5s ease ;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    &:hover{
            box-shadow: 0 0 8px 0px #d2d2d2
    }
    .v-card-title{
              border-bottom: 1px solid #ebeef5;
    padding: 18px 20px;
    }
    .v-card-body{
        font-size: 14px;
        text-align: justify;
        padding: 20px;
    }
    .options{
        display: flex;
    justify-content: flex-end;
    align-items: center;
        font-size: 12px;
        margin-bottom: 10px;
    button{
       background: #dadada;
    border: 0;
    outline: none;
    height: 24px;
    width: 60px;
    margin-right: 10px;
    }
    }
}
</style>
