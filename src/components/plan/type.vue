<template>
    <div>
        <mt-swipe :auto="0" class="banner">
            <mt-swipe-item v-for="item in items" :key=item.id>
                <a :href="item.href">
                    <img :src="item.url" :alt="item.title">
                </a>
            </mt-swipe-item>
        </mt-swipe>
        <div>
            <ul class="pro-list">
                <li v-for="h in hots" :key="h.id">
                    <router-link :to="h.href">
                        <img :src="h.url" alt="" width="100" height="70">
                        <div>
                            <h2>{{h.title}}</h2>
                            <p>
                                <span>保证给付</span> |
                                <span>灵活领取</span> |
                                <span>保费豁免</span>
                            </p>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
  mounted() {
    document.title = this.$route.params.name;
  },
  data() {
    return {
      items: [
        {
          title: "中银三星尊享家盈二号终身寿险",
          href: "/jiaying",
          url: require("../../../static/img/banner/jybanner.png")
        },
        {
          title: "中银聚富年金保险",
          href: "/jufu",
          url: require("../../../static/img/banner/jfbanner.png")
        },
     
      ],
      hots: [
        {
          title: "中银三星尊享家盈二号终身寿险",
          href: "/jiaying",
          url: require("../../../static/img/jyimg.png")
        },
        {
          title: "中银聚富年金保险",
          href: "/jufu",
          url: require("../../../static/img/jfimg.png")
        },
       
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "../../styles/base.scss";
.banner {
  width: 100%;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
  }
}

.pro-list {
  padding: 0 10px;
      margin-top: 20px;
  li {
    padding: 10px 0;
    position: relative;
    list-style: none;
    a {
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: self-start;
      justify-content: left;
    }
    &:first-child {
      padding-top: 0;
    }
    &:after {
      content: " ";
      border-bottom: 1px solid #f7f7f7;
      height: 0;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
    }
    div {
      flex: 1;
      margin-left: 20px;
      h2 {
        font-size: 18px;
        margin: 0;
        color: #333;
        font-weight: normal;
      }
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }
}
</style>
