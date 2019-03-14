<template>
  <div>
    <img src="../../../../static/img/calculate/jiaying/head.png" alt="" class="pro-banner">
    <h3>被保险人信息</h3>
    <div class="block-info">
      <ul>
        <li>被保人:
          <span>{{$route.query.name}}</span>
        </li>
        <li>性别:
          <span>{{$route.query.sex ? '男':'女'}}</span>
        </li>
        <li>年龄:
          <span>{{$route.query.age}}周岁</span>
        </li>
        <li>交费方式:
          <span v-if="$route.query.paymentMethod==1">年交</span>
          <span v-else>月交</span>
        </li>
      </ul>
      <div class="base-info">
        <p>主险:
          <span>中银三星尊享家盈二号终身寿险</span>
        </p>
        <p>年度养老金:
          <span>1.0万</span>
        </p>
        <p>保证领取养老金:
          <span>20万</span>
        </p>
        <p>保障期间（养老金最长领取年限）:
          <span>终身</span>
        </p>
        <p>交费年期:
          <span v-if="$route.query.payTimeLimit==1">
              一次缴清
          </span>
          <span v-else>
              {{$route.query.payTimeLimit}}年
          </span>
        </p>
        <p>年交保费:
          <span>57034.60元</span>
        </p>
      </div>
      <div class="block-benefit">
        <h1>中银三星尊享家盈二号终身寿险利益演示</h1>
        <p>被保险人<span>{{rangeValue}}</span>周岁时</p>
        <div class="custom-range">
          <mt-range
            v-model="rangeValue"
            :min="0"
            :max="90"
            :step="1"
            :bar-height="10">
          </mt-range>
        </div>
        <ul>
          <li><label for="">年度保险费</label><p><span>34412.22</span>元</p></li>
          <li><label for="">累积保险费</label><p><span>34412.22</span>元</p></li>
          <li><label for="">年度养老金</label><p><span>34412.22</span>元</p></li>
          <li><label for="">养老金累计账户价值</label><p><span>34412.22</span>元</p></li>
          <li><label for="">身故保险金</label><p><span>34412.22</span>元</p></li>
          <li><label for="">现金价值</label><p><span>34412.22</span>元</p></li>
        </ul>
      </div>
    </div>
    <div class="block-table">
      <table>
        <thead>
          <tr>
            <td>保单<br>年度末</td>
            <td>期初<br>年龄</td>
            <td>年度<br>保险金</td>
            <td>累计<br>保险金</td>
            <td>年度<br>养老金</td>
            <td>养老年金<br>累计账户价值（期末）</td>
            <td>身故<br>保险金</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i,index) in dataList" :key="index">
            <td>{{i.year}}</td>
            <td>{{i.age}}</td>
            <td>{{i.insuranceExpenses}}</td>
            <td>{{i.cum_Prem}}</td>
            <td>{{i.aa}}</td>
            <td>{{i.bb}}</td>
            <td>{{i.cc}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rangeValue:Number(this.$route.query.age),
      dataList:[
        {
          year: 1,
          age: 12,
          insuranceExpenses: "1000,000",
          cum_Prem: 1000,
          aa: 12000,
          bb: 11000,
          cc: 10000
        },
        {
          year: 2,
          age: 12,
          insuranceExpenses: "1000,000",
          cum_Prem: 1000,
          aa: 12000,
          bb: 11000,
          cc: 10000
        },
        {
          year: 3,
          age: 12,
          insuranceExpenses: "1000,000",
          cum_Prem: 1000,
          aa: 12000,
          bb: 11000,
          cc: 10000
        },
        {
          year: 4,
          age: 12,
          insuranceExpenses: "1000,000",
          cum_Prem: 1000,
          aa: 12000,
          bb: 11000,
          cc: 10000
        }
      ]
    };
  },
  methods: {
    fetchTableData: function() {
      this.$axios({
        methods:'post',
        baseURL:'api',
        url:'/getFeedata',
      }).then((res)=>{
        if(res.status=='200'){
          this.dataList=res.data.tabdata;
        }
      }).catch((error)=>{
        console.log(error);
      })
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "bg-fff";
  },
  created() {
    // this.fetchTableData();
  },

};
</script>
<style lang="scss" scoped>
$focusColor: #f95854;
$usualColor: #666;
$yellowColor: #fccd80;
.pro-banner {
  width: 100%;
  display: block;
}
h3 {
  font-size: 14px;    
  margin: 10px;
  color: $usualColor;
  font-weight: normal;
}
.block-info-style{
 background: #fff3e9;
  border-radius: 4px;
  border: 1px solid $yellowColor;
  margin: 0 10px 10px;
  font-size: 14px;
}
.block-info {
 @extend .block-info-style;
  >ul {
    overflow: auto;
    padding: 0;
    margin: 0;
    li {
      width: calc(50% - 10px);
      float: left;
      padding-left: 10px;
      line-height: 40px;
      list-style: none;
      &:nth-child(1),
      &:nth-child(2) {
        border-bottom: 1px solid $yellowColor;
      }
      span {
        color: $focusColor;
      }
    }
  }
  .base-info {
    background: #fff;
    margin: 0 10px;
    border: 1px solid $yellowColor;
    padding:0  10px;
    p {
      margin: 6px 0;
      span {
        color: $focusColor;
      }
    }
  }
  .block-benefit{
    >p{
      text-align: center;
          margin-top: 0;
      span{
        color: $focusColor;
      }
    }
    >h1{
      text-align: center;
      font-size: 14px;
      color: $focusColor;
      margin-bottom: 5px;
      font-weight: normal;
    }
    .mt-range{
      width: 80%;
      margin: 0 auto;
      .mt-range-runway{
        border-top-color:#fff;
      }
      .mt-range-progress{
        background-color:#fff;
      }
      .mt-range-thumb{
        background-color:$focusColor;
      }
    }
    >ul{
      padding: 10px;
      li{
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
          border:1px solid $yellowColor;
          padding: 2px 20px;
          border-radius: 50px;
          background: #fff;
          color: $focusColor;
          margin-right: 5px;
        }
        p{
              margin: 10px 0;
        }
      }
    }
  }
}
.block-table {
  @extend .block-info-style;
  overflow: auto;
  table{
    width: 150%;
    text-align: center;
    border-collapse: collapse;
    thead{
      background: #FFF3E9;
    }
    tbody{
        color: #b4844e;
      line-height: 20px;
      tr:nth-child(n){
        background:#fff ;
      }
       tr:nth-child(2n){
       background: #FFF3E9;
      }
     
    }
  }
}
</style>


