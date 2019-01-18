<template>
  <div class="v-toast" :class="['v-pos-'+position]" v-if="show">
    <div class="icon" v-if="icon">
      <font-awesome-icon
        :icon="icon"
      />
    </div>
    <p>{{text}}</p>
  </div>
</template>
<style>
</style>
<script>
export default {
  name: "Toast",
  props: {
    // text: {
    //   type: String,
    //   required:true
    // },
  
    duration:Number,

    
  }
};
</script>
<style lang="scss" scoped>
.v-toast {
  position: fixed;
  left: 50%;
  padding: 10px ;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  max-width: 80%;
    background: rgba(0, 0, 0, 0.7);
  color: #fff;
  z-index: 2;

  &.v-pos-middle {
    top: 50%;
  }
  &.v-pos-top {
    top: 10%;
  }
  &.v-pos-bottom {
    bottom: 10%;
  }
  .icon {
    font-size: 50px;
    text-align: center;
  }
}
</style>



