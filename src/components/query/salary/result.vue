<template>
  <div class="list">
    <p class="title">我的薪资清单</p>
    <div v-if="queryData.length == 0 || !queryData" class="empty">
      <img src="../../../../static/img/plan/tipbg.png" alt="">
    </div>
    <div >
      <div class="list-item" v-for="(item,index) in queryData" :key="item.id">
        <div class="item-sum flex has-detail" @click="toggle(index)">
          <p>
            {{item.month}}
          </p>
          <div><span>{{item.salarySum}}元</span></div>
        </div>
        <!-- <transition name="bounce"  > -->
        <ul v-show="scope[index]">
          <li class="flex">
            <span>基础底薪</span>{{item.baseSalary}}元</li>
          <li>
          <div class="flex has-detail" @click="toggle()">
              <p>津贴</p>
              <div><span>{{item.subsidy}}元</span></div>
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
        <!-- </transition> -->
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
    };
  },
  methods: {
    toggle(index) {
      this.$set(this.scope, index, !this.scope[index])
    },
  },
  created() {
    document.getElementsByTagName("body")[0].className = "bg-f7";
    let data = this.$route.query;
      requestSalaryQuery(data).then(res => {
          this.queryData=res.data
          this.queryData.forEach((item, index) => {
            item.subsidy =
              item.serviceSubsidy + item.postSubsidy + item.behaviorSubsidy;
            item.salarySum =
              item.baseSalary + item.subsidy + item.performance + item.bonus;
          });
      })
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
    height: 240px;
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
    div {
      padding-right: 30px;
      position: relative;
      &:after {
        background: url("../../../../static/img/query/back_small.png") center
          no-repeat;
        background-size: cover;
        content: " ";
        position: absolute;
        right: 0;
        height: 10px;
        width: 10px;
        top: 50%;
        transform: translateY(-50%);
      }
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
    .has-detail {
      &.open + ul {
        max-height: 300px;
        -webkit-transition: max-height 0.5s;
        transition: max-height 0.5s;
      }
      & + ul {
        overflow: auto;
        -webkit-transition: height 0.3s;
        transition: height 0.3s;
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
}
</style>

