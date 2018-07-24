<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <img src="../../../assets/calculate/jiaying/head.png" alt="" class="pro-banner">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="产品特色">
          <feature />
        </mt-tab-container-item>
        <mt-tab-container-item id="保险责任">
          <img src="../../../assets/calculate/jiaying/bxzr.jpg" alt="" style="width:100%">
        </mt-tab-container-item>
        <mt-tab-container-item id="投保示例">
          <img src="../../../assets/calculate/jiaying/tbsl.jpg" alt=""  style="width:100%">
        </mt-tab-container-item>
        <mt-tab-container-item id="利益演示">
          <calculate />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="产品特色">
        <img slot="icon" src="../../../assets/cpts2.png"> 产品特色
      </mt-tab-item>
      <mt-tab-item id="保险责任">
        <img slot="icon" src="../../../assets/bxzr2.png"> 保险责任
      </mt-tab-item>
      <mt-tab-item id="投保示例">
        <img slot="icon" src="../../../assets/tbsl2.png"> 投保示例
      </mt-tab-item>
      <mt-tab-item id="利益演示">
        <img slot="icon" src="../../../assets/lyys2.png"> 利益演示
      </mt-tab-item>
    </mt-tabbar>
  </div>

</template>

<script>
import feature from "./feature";
import calculate from "./calculate"

export default {
  components: {
    feature,
    calculate
  },
  name: "jiaying",
  data() {
    return {
      selected: "产品特色"
    };
  },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].className="bg-fff";
  },
};
</script>
<style lang="scss" scoped>
@import "~@/styles/util/layout";

</style>
