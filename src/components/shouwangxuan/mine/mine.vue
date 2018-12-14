<template>
    <div>
        <div class="top">
            <div class="avator">
                <input type="file" name="" id="" accept="image/png, image/jpeg, image/gif, image/jpg" @change="changeImage($event)">
                <img :src="avatorUrl" alt="">
            </div>
                <p ref="name">Fortune</p>
        </div>
            <div class="mine-block">
                <mt-navbar v-model="selected">
                    <mt-tab-item id="1">浏览</mt-tab-item>
                    <mt-tab-item id="2">评论</mt-tab-item>
                    <mt-tab-item id="3">点赞</mt-tab-item>
                    <mt-tab-item id="4">鼓励</mt-tab-item>
                    <mt-tab-item id="5">订阅</mt-tab-item>
                    <mt-tab-item id="6">言论</mt-tab-item>
                </mt-navbar>
                <!-- tab-container -->
                <mt-tab-container v-model="selected">
                    <mt-tab-container-item id="1">
                        <ul>
                            <li></li>
                        </ul>
                    </mt-tab-container-item>
                    <mt-tab-container-item id="2">
                        2
                    </mt-tab-container-item>
                    <mt-tab-container-item id="3">
                        3
                    </mt-tab-container-item>
                    <mt-tab-container-item id="4">
                        4
                    </mt-tab-container-item>
                     <mt-tab-container-item id="5">
                        5
                    </mt-tab-container-item>
                     <mt-tab-container-item id="6">
                        6
                    </mt-tab-container-item>
                </mt-tab-container>
            </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            selected:"1",
            avatorUrl: require("../../../../static/img/jfimg.png")

        }
    },
    beforeCreate() {
        document.getElementsByTagName("body")[0].className = "bg-f7";
    },
    created(){
        this.$nextTick(()=>{
            this.$refs.name.innerHTML=this.$store.getters.userInfo.username;
        })
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
}
</script>
<style lang="scss" scoped>
.top{
   padding: 30px 0;
    text-align: center;
    background: #128fff;
    color:#fff;
        font-size: 14px;
    .avator {
    width: 60px;
    height: 60px;
    overflow: hidden;
    position: relative;
    margin: 0 auto 10px;
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
.mine-block{
    .mint-navbar .mint-tab-item {
    background: #fff;
    color: #9babba;
    text-align: center;
    padding: 15px 0;
  }
  .mint-tab-item.is-selected {
    border-bottom: 1px solid #495056;
    color: #495056;
  }
}
</style>


