<template>
    <div>
        <div class="block-ts">

        </div>
        <div class="block-ys">
            <img src="" alt="">
            <ul>
                <li v-for="item in features" :key="item.id">
                    <img :src="item.src" alt="">
                    <div class="item-text">
                        <h2>{{item.title}}</h2>
                        <p>{{item.desc}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name: "feature",
  data() {
    return {
      features: [
        {
          src: require("../../../assets/calculate/jiaying/feature/ts1.png"),
          title: "终身复利",
          desc: "保险金额以每年3%复利增长，文件有保证。"
        },
        {
          src: require("../../../assets/calculate/jiaying/feature/ts2.png"),
          title: "高额权益",
          desc: "现金价值稳健增长，兼顾安全性与成长性。"
        },
        {
          src: require("../../../assets/calculate/jiaying/feature/ts3.png"),
          title: "私人订制",
          desc: "减额领取灵活，满足人生不同阶段的财务需求。"
        },
        {
          src: require("../../../assets/calculate/jiaying/feature/ts4.png"),
          title: "恒久品质",
          desc: "源于百年中行，传承稳健经营与客户至上信念。"
        },
        {
          src: require("../../../assets/calculate/jiaying/feature/ts5.png"),
          title: "保障身价",
          desc:
            "身故/高残保障随行，可搭配《中银三星附加圆福投保人保险费豁免定期寿险》，规避重大风险，回归保障本源。"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.block-ys {
  padding: 10px;
  ul {
    padding-left: 0;
    margin: 0;
    li {
      list-style: none;
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;

      .item-text {
        color: #b4844e;
        flex: 1;
        h2 {
          font-size: 18px;
          margin: 0;
        }
        p {
          margin: 5px 0 0 0;
           font-size: 14px;
        }
      }
      img {
        width: 70px;
        margin-right: 10px;
      }
    }
  }
}
</style>

