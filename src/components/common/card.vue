<template>
    <div class="v-card">
        <div  class="title">
            <slot name="title">

            </slot>
        </div>
        <slot>
        </slot>
        <div v-if="isUsed" class="options">
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
    flex: 1;
    background: #f5f5f5;
    margin: 10px 0;
    padding: 10px;
    border-radius: 4px;
    transition: all .5s ease ;
    &:hover{
            box-shadow: 0 0 8px 0px #d2d2d2
    }
    .title{
            border-bottom: 1px solid #ececec;
            padding-bottom: 10px;
    }
    .options{
        display: flex;
    justify-content: flex-end;
    align-items: center;
        font-size: 12px;
    button{
        padding: 0 15px;
        background: transparent;
    border: 0;
    outline: none;
    }
    }
}
</style>
