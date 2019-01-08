<template>
  <div class="wrapper">
    <div class="section">
      <div class="main">
        <p class="section-label">Real-time search</p>
        <v-search :searchValues="searchValues"></v-search>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">Tooltip</p>
        <v-button type="primary" size="small">向上提示</v-button>
      </div>
    </div>
    <div class="section">
      <div class="main" ref="validateForm">
        <p class="section-label">Form</p>
        <div class="form-group">
          <label for="">姓名:</label>
          <v-input v-model="validateForm.username" name="name" id="username" type="text" placeholder="First Name" />
        </div>
        <div class="form-group label-p-10">
          <label for="">上门取件:</label>
          <v-switch v-model="validateForm.switchValue" size="small" id="pickUp" name="pickUp" @change="onChange($event,'switchValue')" />
        </div>
        <div class="form-group label-p-10">
          <label for="">支付方式:</label>
          <v-select v-model="validateForm.payMethod" placeholder="您的支付方式是" :values="jobValue" @change="onChange($event,'payMethod')"></v-select>
        </div>
        <div class="form-group label-p-10">
          <label for="">货物类型:</label>
          <v-checkbox-group v-model="validateForm.checkboxValue" @on-change="onChange($event,'checkboxValue')">
            <v-checkbox v-for="(i,index) in tags" :key="index" :label="i.label" name="checkbox">{{i.text}}</v-checkbox>
          </v-checkbox-group>
        </div>
        <v-button type="primary" size="small" @click="handleSubmit()">提交</v-button>
        <v-button type="default" size="small">取消</v-button>
        <v-button type="default" size="small" @click="resetForm('validateForm')">重置</v-button>
        <span class="error" v-show="error" ref="error"></span>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">Dialog</p>
        <v-button type="default" size="small" @click="openDialog">open Dialog</v-button>
        <v-dialog :visible.sync="isVisible" title="提示信息" size="small" center @open="openHandle">
          <span slot="header">确认</span>
          <table>
            <thead>
              <tr>
                <th>sss</th>
                <th>sss</th>
                <th>sss</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>dsdas</td>
                <td>dsdas</td>
                <td>dsdas</td>
              </tr>
            </tbody>
          </table>
          <div slot="footer">
            <v-button type="success" size="small" @click="isVisible = false">确定</v-button>
            <v-button type="success" size="small" @click="isVisible = false">取消</v-button>
          </div>
        </v-dialog>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">Tree</p>
        <v-tree :data="tree"></v-tree>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">Page Group</p>
        <v-page :total="82" :pageSizes="5" :pageIndex="curPage" :pagerCount="7" @on-change="onPageChange" />
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">Card Group</p>
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
        <p class="section-label">Button</p>
        <v-button type="default" size="large" loading>default</v-button>
        <v-button type="primary" size="large" loading>primary</v-button>
        <v-button type="info" size="large">info</v-button>
        <v-button type="warning" size="large">warn</v-button>
        <v-button type="success" size="large">success</v-button>
        <v-button type="danger" size="large">danger</v-button>
        <v-button type="default" size="normal" loading>default</v-button>
        <v-button type="primary" size="normal">primary</v-button>
        <v-button type="info" size="normal">info</v-button>
        <v-button type="warning" size="normal">warn</v-button>
        <v-button type="success" size="normal">success</v-button>
        <v-button type="danger" size="normal">danger</v-button>
        <v-button type="default" size="small">default</v-button>
        <v-button type="primary" size="small">primary</v-button>
        <v-button type="info" size="small">info</v-button>
        <v-button type="warning" size="small">warn</v-button>
        <v-button type="success" size="small">success</v-button>
        <v-button type="danger" size="small">danger</v-button>
        <v-button type="default" size="small" disabled>default</v-button>
        <v-button type="primary" size="small" disabled>primary</v-button>
        <v-button type="info" size="small" disabled>info</v-button>
        <v-button type="warning" size="small" disabled>warn</v-button>
        <v-button type="success" size="small" disabled>success</v-button>
        <v-button type="danger" size="small" disabled>danger</v-button>
      </div>
    </div>
    <div class="section">
      <div class="main">

        <p class="section-label">Load</p>
      <v-load></v-load>
    </div>
    </div>

  </div>
</template>
<script>
import { required, minLength, between } from "vuelidate/lib/validators";
import VDialog from "./common/dialog";
import VPage from "./common/pages";
import VTree from "./common/tree";
import VCheckboxGroup from "./common/checkbox-group";
import VCheckbox from "./common/checkbox";
import VButton from "./common/button";
import VCard from "./common/card";
import VSwitch from "./common/switch";
import VSearch from "./common/search";
import VInput from "./common/input";
import VSelect from "./common/select";
import VLoad from "./common/loading";
export default {
  components: {
    VPage,
    VDialog,
    VTree,
    VCheckboxGroup,
    VCheckbox,
    VButton,
    VCard,
    VSwitch,
    VSearch,
    VInput,
    VSelect,
    VLoad
  },
  data() {
    return {
      error: false,
      searchValues: [
        "张雪",
        "蜜蜜",
        "真心",
        "孟林",
        "真假呀",
        "张天",
        "孟婆汤",
        "辛弦",
        "郑板桥"
      ],
      jobValue: ["到付", "现付"],
      validateForm: {
        username: "",
        payMethod: "",
        checkboxValue: ["a"],
        switchValue: false
      },
      isVisible: false,
      tags: [
        {
          label: "a",
          text: "文件"
        },
        {
          label: "b",
          text: "食品"
        },
        {
          label: "c",
          text: "易碎品"
        }
      ],
      tree: [],
      curPage: 2,
      isVisible: false
    };
  },
  validations: {
    username: {
      required,
      minLength: minLength(4)
    }
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].className = "bg-f7";
  },
  created() {
    this.$ajax.get("http://localhost:8000/api/getTree").then(res => {
      this.tree = res.data.data;
    });
    this.defaultData = JSON.parse(JSON.stringify(this.$data.validateForm));
  },
  destroyed: function() {
    document.getElementsByTagName("body")[0].className = "";
  },
  methods: {
    onChange(v, type) {
      this.validateForm[type] = v;
    },
    handleSubmit() {
      const formData = JSON.stringify(this.validateForm);
      if (!this.validateForm.username) {
        this.error = true;
        this.$refs.error.innerText = "姓名必填";
      } else if (!this.validateForm.payMethod) {
        this.error = true;
        this.$refs.error.innerText = "请选择支付方式";
      } else {
        this.error = false;
        this.$ajax.post("http://localhost:8000/api/customForm",formData)
          .then(res => {
            console.log(res);
          })
          .catch(err => {});
      }
    },
    resetForm(formName) {
      this.$data.validateForm = Object.assign({}, this.defaultData);
    },
    openDialog() {
      this.isVisible = true;
    },
    onPageChange(v) {
      this.curPage = v;
    },
    openHandle() {}
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  .section {
    margin: 20px;
    padding: 10px 0;
    background: #fff;
    box-shadow: 0px 2px 8px #dedede;
    .main {
      margin: 0 20px;
      .form-group {
        display: flex;
        margin-bottom: 20px;
        align-items: center;
        &.label-p-10 {
          padding: 10px 0;
        }
        label {
          flex: 0 0 15%;
        }
      }
      .error {
        color: #f44336;
        font-size: 12px;
      }
    }
    .section-label {
      color: #333;
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
  }
}
</style>


