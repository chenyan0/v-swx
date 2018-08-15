<template>
  <div class="wrapper">
     <div class="section">
      <div class="main">
        <p class="section-label">页码组</p>
        <v-page :total="82" :pageSizes="5" :pageIndex="index" :pagerCount="7" @on-change="onPageChange"/>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">复选框组</p>
        <v-checkbox-group v-model="fruit" @on-change="onChange">
          <v-checkbox v-for="(i,id) in tags" :key="id" :label="i.label"></v-checkbox>
        </v-checkbox-group>
        <div>{{ fruit }}</div>
        <p class="section-label">单个复选框</p>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">卡片组</p>
        <v-card>
          <div slot="title">Classic film</div>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
        </v-card>
        <v-card option>
          <div slot="title">Classic film two</div>
          <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
        </v-card>
      </div>
    </div>
    <div class="section">
      <!-- <label for="" class="label">button示例</label> -->
      <div class="main">
        <p class="section-label">按钮组（大尺寸）</p>
        <v-button type="default" size="large" loading>default</v-button>
        <v-button type="primary" size="large" loading>primary</v-button>
        <v-button type="info" size="large">info</v-button>
        <v-button type="warning" size="large">warn</v-button>
        <v-button type="success" size="large">success</v-button>
        <v-button type="danger" size="large">danger</v-button>
        <p class="section-label">按钮组（常规尺寸）</p>
        <v-button type="default" size="normal" loading>default</v-button>
        <v-button type="primary" size="normal">primary</v-button>
        <v-button type="info" size="normal">info</v-button>
        <v-button type="warning" size="normal">warn</v-button>
        <v-button type="success" size="normal">success</v-button>
        <v-button type="danger" size="normal">danger</v-button>
        <p class="section-label">按钮组（小尺寸）</p>
        <v-button type="default" size="small">default</v-button>
        <v-button type="primary" size="small">primary</v-button>
        <v-button type="info" size="small">info</v-button>
        <v-button type="warning" size="small">warn</v-button>
        <v-button type="success" size="small">success</v-button>
        <v-button type="danger" size="small">danger</v-button>
        <p class="section-label">按钮组（禁用）</p>
        <v-button type="default" size="small" disabled>default</v-button>
        <v-button type="primary" size="small" disabled>primary</v-button>
        <v-button type="info" size="small" disabled>info</v-button>
        <v-button type="warning" size="small" disabled>warn</v-button>
        <v-button type="success" size="small" disabled>success</v-button>
        <v-button type="danger" size="small" disabled>danger</v-button>
      </div>
    </div>

  </div>
</template>
<script>
import VPage from "./common/pages"
import VCheckboxGroup from "./common/checkbox-group"
import VCheckbox from "./common/checkbox"
import VButton from "./common/button"
import VCard from "./common/card"
export default {
  components: {
    VPage,
    VCheckboxGroup,
    VCheckbox,
    VButton,
    VCard
  },
  data() {
    return {
      fruit: ["苹果🍎"],
      tags: [
        {
          label: "苹果🍎"
        },
        {
          label: "香蕉🍌"
        },
        {
          label: "橙子🍊"
        },
        {
          label: "橘子🍊"
        }
      ],
      index:2
    };
  },
  methods: {
    onChange: function(data) {
      this.fruit = data;
    },
    onPageChange(v){
      this.index=v;
console.log(v);
    }
    // onChange: function(key,state) {
    //    console.log(key);
    //   if(state){
    //     this.$set(this.values,this.values.length,key)
    //       // this.values.push(key);
    //   }else{
    //       this.values.forEach((ele,i)=>{
    //    console.log(Object.keys(ele).join(),Object.keys(key).join());
    //         if(Object.keys(ele).join()==Object.keys(key).join()){
    //           this.values.splice(this.values.indexOf(i),1);
    //         }
    //       })

    //   }
    // }
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .section {
    margin: 20px 0;
    .main {
      margin: 0 20px;
    }
    .section-label {
      color: #a9a9a9;
      font-weight: bold;
      border-left: 3px solid #f3683c;
      padding-left: 10px;
    }
    .label {
      display: block;
      background: #f3693d;
      color: #fff;
      margin-bottom: 10px;
      line-height: 40px;
      text-align: center;
    }
  }
}
</style>


