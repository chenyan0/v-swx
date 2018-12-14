<template>
  <div class="page-tabbar">
    <div class="page-wrap">
      <img src="../../../../static/img/calculate/jiaying/head.png" alt="" class="pro-banner">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="产品特色">
          <feature />
        </mt-tab-container-item>
        <mt-tab-container-item id="保险责任">
          <img src="../../../../static/img/calculate/jiaying/bxzr.jpg" alt="" style="width:100%">
        </mt-tab-container-item>
        <mt-tab-container-item id="投保示例">
          <img src="../../../../static/img/calculate/jiaying/tbsl.jpg" alt=""  style="width:100%">
        </mt-tab-container-item>
        <mt-tab-container-item id="利益演示">
          <calculate />
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="产品特色">
          <div class="tab-icon"><icon name="magic" ></icon></div>
         <p>产品特色</p>
      </mt-tab-item>
      <mt-tab-item id="保险责任">
        <div class="tab-icon"><icon name="hourglass-end" ></icon></div>
        <p>保险责任</p>
      </mt-tab-item>
      <mt-tab-item id="投保示例">
           <div class="tab-icon"><icon name="flag"></icon></div>
        <p>投保示例</p>
      </mt-tab-item>
      <mt-tab-item id="利益演示">
         <div class="tab-icon"><icon name="address-book" ></icon></div>
        <p>利益演示</p>
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
