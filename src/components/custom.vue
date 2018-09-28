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
        <p class="section-label">Form</p>
        <div class="form-group">
          <label for="">姓名:</label>
          <v-input name="name" id="username" type="text" placeholder="First Name" v-model="username" />
        </div>
        <div class="form-group label-p-10">
          <label for="">上门取件:</label>
          <v-switch v-model="val1" :width="40" id="id" name="nn" @change="onSwitchChange" />
        </div>
        <div class="form-group label-p-10">
          <label for="">货物类型:</label>
          <v-checkbox-group v-model="fruit" @on-change="onChange">
            <v-checkbox v-for="(i,id) in tags" :key="id" :label="i.label">{{i.text}}</v-checkbox>
          </v-checkbox-group>
        </div>

        <v-button type="default" size="small">提交</v-button>
        <v-button type="default" size="small">取消</v-button>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <p class="section-label">模态窗</p>
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
        <v-page :total="82" :pageSizes="5" :pageIndex="index" :pagerCount="7" @on-change="onPageChange" />
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

  </div>
</template>
<script>
import { requestTree } from "../api/api";
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
    VInput
  },
  data() {
    return {
      username:"",
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
      val1: false,
      isVisible: false,
      fruit: ["a"],
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
      index: 2,
      isVisible: false
    };
  },
    beforeCreate: function() {
      document.getElementsByTagName("body")[0].className="bg-f7";
  },
  created() {
    requestTree().then(res => {
      this.tree = res.data;
    });
  },
  methods: {
    onSwitchChange(v) {
      this.val1 = v;
    },
    onChange: function(data) {
      this.fruit = data;
    },
    openDialog() {
      console.log(this.isVisible);
      this.isVisible = true;
    },

    onPageChange(v) {
      this.index = v;
      console.log(v);
    },
    openHandle() {},
    closeHandle() {}
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
            &.label-p-10{
              padding: 10px 0;
            }
        label {
          flex: 0 0 15%;
        }
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


