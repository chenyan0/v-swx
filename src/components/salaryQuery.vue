<template>
  <div>
    <img src="../../static/img/banner/salary.jpg" alt="" class="banner">
    <div class="form-field">
      <label for="" class="form-label">选择区间</label>
      <mt-datetime-picker ref="start" type="date" v-model="startTime" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm"></mt-datetime-picker>
      <mt-datetime-picker ref="end" type="date" v-model="endTime" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm"></mt-datetime-picker>
      <!-- <mt-datetime-picker ref="picker" type="date" v-model="endTime"  year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm"></mt-datetime-picker> -->
      <div class="cell">
        <label for="">开始时间</label>
        <input type="text" label="开始时间" placeholder="请输入" v-model="startTime" readonly v-on:click="openPicker('start')">
      </div>
      <div class="cell">
        <label for="">结束时间</label>
        <input type="text" label="结束时间" placeholder="请输入" v-model="endTime" readonly v-on:click="openPicker('end')">
      </div>
      <div class="submit">
        
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Field } from "mint-ui";
import { DatetimePicker } from "mint-ui";
import VButton from "./common/button";
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Field.name, Field);
export default {
  components: {
    VButton
  },
  data() {
    return {
      startTime: "",
      endTime: ""
    };
  },
  watch: {
    startTime: function() {
      console.log(this.formatDate(this.$refs.start.value));
      return this.formatDate(this.$refs.start.value);
    }
  },
  updated() {
    console.log(this.startTime);
  },
  methods: {
    openPicker(picker) {
      this.$refs[picker].open();
    },
    formatDate(date) {
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    handleConfirm(val) {
      //   let a = this.startTime
      //   this.startTime=this.formatDate(this.$refs.picker.value)
      //   console.log(this.formatDate(this.$refs.picker.value))
    }
  }
};
</script>
<style scoped lang="scss">
.banner {
  width: 100%;
  display: block;
}
.form-label {
  display: block;
  background: #f7f7f7;
  line-height: 44px;
  padding-left: 10px;
}
.cell {
  display: flex;
  padding: 5px 10px;
  align-items: center;
  border-bottom: 1px solid #f7f7f7;
  font-size: 14px;
  input {
    flex: 1;
    height: 30px;
    padding-left: 20px;
    font-size: 14px;
  }
}

.submit {
  margin: 20px;
}
</style>