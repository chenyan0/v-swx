<template>
<div>

    <div class="cells">
        <div class="cell">
            <div class="avator">
                <input type="file" name="" id="" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">
                <img :src="avatorUrl" alt="">
            </div>
        </div>
    </div>
    <div class="cells">
        <div class="cell">
            <span>钱包</span>
        </div>
        <div class="cell">
            <span>卡包</span>
        </div>
        <div class="cell">
            <span>其他</span>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      avatorUrl: require("../../static/img/jfimg.png")
    };
  },
  beforeCreate() {
    document.getElementsByTagName("body")[0].className = "bg-f7";
  },
  methods: {
    changeImage: function(e) {
      let file = e.target.files[0];
      this.file = file;
      let reader = new FileReader();
      let that = this;
      reader.readAsDataURL(file);
      reader.onload = function(e) {
        that.avatorUrl = this.result;
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.cells{
    margin-top: 20px;
}
.cell {
  background: #fff;
  margin-top: 10px;
  padding: 10px 15px;
  .avator {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    img {
      width: 100%;
      height: 100%;
    }
    [type="file"] {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
}
</style>
