<template>
    <div class="section">
        <div class="main">
            <p class="section-label">Select</p>
            <div class="select">
                <v-select :selectValues="cityList" :v-model="selectValueModel" :style="{width:'200px'}" placeholder="请选择" clearable @change="onSelectChange($event,'selectValue')"></v-select>
                <v-select :selectValues="cityList" placeholder="选择一下" disabled size="small" :style="{width:'100px'}"></v-select>
                <v-select placeholder="选择一下" notFoundText='无匹配选项' size="large" :style="{width:'100px'}"></v-select>
            </div>
        </div>
    </div>
</template>

<script>
  import VSelect from "../../common/select"
    export default {
        components: {
            VSelect
        },
        data() {
            return {
                selectValueModel: "",
                cityList: [{
                        value: "beijing",
                        label: "北京市"
                    },
                    {
                        value: "shanghai",
                        label: "上海市"
                    },
                    {
                        value: "shenzhen",
                        label: "深圳市"
                    },
                    {
                        value: "hangzhou",
                        label: "杭州市"
                    },
                    {
                        value: "nanjing",
                        label: "南京市"
                    },
                    {
                        value: "beijing",
                        label: "临汾市"
                    },
                    {
                        value: "beijing",
                        label: "郑州市"
                    },
                    {
                        value: "chongqing",
                        label: "重庆市"
                    }
                ]
            }
        },
        methods:{
              onSelectChange(v, type) {
        console.log(v, type);
        this[type] = v;
      },
        }
    
    }
</script>
<style lang="scss" scoped>
 
      .main {
        margin: 0 20px;
      }
      .section-label {
        color: #657180;
        font-weight: bold;
        font-size: 18px;
        margin: 0 0 10px 0;
      }
      .label {
        display: block;
        background: #f3693d;
        color: #fff;
        margin-bottom: 10px;
        line-height: 40px;
        text-align: center;
      }
      .card-body {
        &:after {
          content: " ";
          display: block;
          height: 0;
          clear: both;
          visibility: hidden;
        }
        .v-card {
          margin-right: 20px;
          width: 300px;
          float: left;
        }
      }
</style>


