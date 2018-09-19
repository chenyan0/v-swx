<template>
    <div class="list">
        <p class="title">我的薪资清单</p>
        <div v-if="queryData.length > 0" class="empty">
            <img src="../../../../static/img/plan/tipbg.png" alt="">
        </div>
        <div v-else>
            <div class="list-item" v-for="(item,index) in queryData" :key="item.id">
                <div class="item-sum flex has-detail" @click="toggle(index)">{{item.month}}
                    <span>{{item.salarySum}}元</span>
                </div>
                <transition name="bounce">
                    <ul v-if="scope[index]">
                        <li class="flex">
                            <span>基础底薪</span>{{item.baseSalary}}元</li>
                        <li>
                            <div class="flex has-detail">津贴
                                <span>{{item.subsidy}}元</span>
                            </div>
                            <ul>
                                <li class="flex">
                                    <span>长期服务津贴</span>{{item.serviceSubsidy}}元</li>
                                <li class="flex">
                                    <span>岗位津贴</span>{{item.postSubsidy}}元</li>
                                <li class="flex">
                                    <span>行为津贴</span>{{item.behaviorSubsidy}}元</li>
                            </ul>
                        </li>
                        <li class="flex">
                            <span>绩效</span>{{item.performance}}元</li>
                        <li class="flex">
                            <span>奖金</span>{{item.bonus}}元</li>
                    </ul>
                </transition>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      queryData: [],
      scope: []
    }
  },
  methods: {
    toggle(index) {
      this.$set(this.scope, index, !this.scope[index]);
    },
    init() {
      this.queryData.forEach((item, index) => {
        item.subsidy =
          item.serviceSubsidy + item.postSubsidy + item.behaviorSubsidy;
        item.salarySum =
          item.baseSalary + item.subsidy + item.performance + item.bonus;
      });
    }
  },
  created() {
    document.getElementsByTagName("body")[0].className = "bg-f7";
    this.queryData = this.$route.params.result;
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    height: 0;
  }
  100% {
    height: max-content;
  }
}

.list {
  font-size: 14px;
  padding: 0 15px;
  .title {
    margin: 0;
    padding: 15px 0;
  }
  .empty {
    margin-top: 200px;
    text-align: center;
    img {
      width: 250px;
    }
  }

  .flex {
    display: flex;
    justify-content: space-between;
  }
  .has-detail {
    padding-right: 30px;
    position: relative;
    &:after {
      content: ">";
      position: absolute;
      right: 10px;
      height: 0.22rem;
      width: 0.12rem;
      color: #7b7b7b;
    }
  }
  .list-item {
    border-radius: 10px;
    background: #fff;
    border-left: 4px solid #b06164;
    margin-bottom: 15px;
    padding-right: 10px;
    .item-sum {
      line-height: 40px;
      padding-left: 10px;
      span {
        color: #b06164;
      }
    }
    ul {
      // height: 0;
      overflow: hidden;
      margin: 0;
      padding-left: 20px;
      li {
        list-style: none;
        line-height: 30px;
        color: #7b7b7b;
        &.flex {
          padding-right: 30px;
        }
      }
    }
  }
}
</style>

