<template>
    <div class="v-select">
        <div class="v-select-trigger" @click="trigger()">
            <span class="v-select-placeholder" :class="{'v-floating-placeholder':isFloat,'v-focus':isFocus}">{{placeholder}}</span>
            <span class="v-select-value" ref="val"></span>
            <span class="v-select-arrow"></span>
        </div>
        <transition name="fade">
          <div class="v-select-modal" v-show="visible">
            <p v-for="item in values" :key="item.id" @click="handleValue($event)">{{item}}</p>
          </div>
        </transition>
    </div>
</template>
<script>

export default {
  data() {
    return {
        isFloat:false,
        isFocus:false,
        visible:false,
       
    }
  },
  props:{
    values:{
      type:Array,
      default:[]
    },
    placeholder:{
      type:String,
      default:''
    },
   
  },
  methods:{
      trigger(){
          this.isFloat=true
          this.isFocus=true
          this.visible=true
      },
      handleValue($event){
        this.$refs.val.innerHTML=$event.target.innerHTML
        this.visible=false
        this.isFocus=false
        this.$emit('change',$event.target.innerHTML)
      }
  },
  created(){
  }
};
</script>
<style lang="scss" scoped>

$class:v-select;
.#{$class} {
  font-size: 14px;
  position: relative;
  &-trigger {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    min-width: 168px;
    cursor: pointer;
    position: relative;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.38);
    border-bottom: 1px solid  #9e9e9e;
    .#{$class}-placeholder {
      position: relative;
      padding: 0 2px;
      transform-origin: left top;
          transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), scale 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      &.v-floating-placeholder {
        top: -22px;
        left: 0;
        transform: scale(0.75);
        width: 99px;
        
      }
      &.v-focus{
        color: #39f;
      }
    }
    .#{$class}-value {
      position: absolute;
      white-space: nowrap;
      overflow-x: hidden;
      text-overflow: ellipsis;
      left: 0;
      top: 6px;
      color: rgba(0, 0, 0, 0.87);
    }
    .#{$class}-arrow {
      width: 0;
      height: 0;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
      border-top: 5px solid;
      margin: 0 4px;
      color: rgba(0, 0, 0, 0.38);
    }
  }
  &-modal{
    position: absolute;
    background: #ffffff;
    top: 0;
    box-shadow: 0 0 10px #dedede;
        min-width: 120px;

    z-index: 2;
    p{
    padding: 5px;
    margin: 0;
        cursor: pointer;
    transition: all .3s ease ;
      &:hover{
        background: #efefef;
      }
    }
  }
}

.fade-enter-active{
  animation: fade-in 0.3s;

}
.fade-leave-active{
  animation: fade-out 0.3s;

}
@keyframes fade-in {
    0% {
    transform: transform(0,-20px,0);
    opacity: 0;
  }
  100% {
    transform: transform(0,0,0);
    opacity: 1;
  }
}
@keyframes fade-out {
    
  0% {
    transform:transform(0,0,0);
    opacity: 1;
  }
  100% {
    transform: transform(0,-20px,0);
    opacity: 0;
  }
}
</style>

