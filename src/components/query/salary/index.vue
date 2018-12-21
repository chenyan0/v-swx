<template>
  <div>
    <img src="../../../../static/img/banner/salary.jpg" alt="" class="banner">
    <div class="form-field">
      <label for="" class="form-label">选择区间</label>
      <mt-datetime-picker ref="start" type="date" v-model="startTime" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm('start','startReal')"></mt-datetime-picker>
      <mt-datetime-picker ref="end" type="date" v-model="endTime" year-format="{value} 年" month-format="{value} 月" date-format="{value} 日" @confirm="handleConfirm('end','endReal')"></mt-datetime-picker>
      <div class="cell">
        <label for="">开始时间</label>
        <input type="text" label="开始时间" placeholder="请输入" v-model="startReal" readonly @click="openPicker('start')">
      </div>
      <div class="cell">
        <label for="">结束时间</label>
        <input type="text" label="结束时间" placeholder="请输入" v-model="endReal" readonly @click="openPicker('end')">
      </div>
      <div class="submit">
        <v-button type="primary" @click="handleSubmit">提交</v-button>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VButton from "../../common/button";
import { MessageBox } from "mint-ui";

export default {
  components: {
    VButton
  },
  data() {
    return {
      startTime: "",
      endTime: "",
      startReal: "",
      endReal: ""
    };
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "";
  },
  watch: {
    startTime(now, before) {
      this.startReal = this.formatDate(now);
    },
    endTime(now, before) {
      this.endReal = this.formatDate(now);
    }
  },
  methods: {
    openPicker(picker) {
      this.$refs[picker].open();
    },
    formatDate(dd) {
      const date = new Date(Date.parse(dd));
      const y = date.getFullYear();
      let m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      return y + "-" + m + "-" + d;
    },
    handleConfirm(picker, input) {
      this.input = this.formatDate(this.$refs[picker].value);
    },
    handleSubmit() {
      let data = {
        startTime: this.startReal,
        endTime: this.endReal
      }
      if (!this.startReal || !this.endReal) {
        MessageBox("提示", "请选择查询时间");
      } else if (Date.parse(this.startReal) > Date.parse(this.endReal)) {
        MessageBox("提示", "结束时间不能小于开始时间");
      } else {
        this.$router.push({
          path: "/salary/result",
          query: data
        })
      }
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
    border: 0;
  }
}

.submit {
  margin: 20px 20px  0;
}
</style>