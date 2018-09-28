<template>
    <div class="v-search">
        <div class="v-search-form">
            <input type="text" v-model="key" placeholder="搜索客户名称" @focus="toggle()" >
            <ul  v-if="isHide">
                <li v-for="i in filterList" :key="i.id" @click="save($event)">{{i}}</li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      values: this.searchValues,
      key: "",
      isHide: false
    }
  },
  props:{
      searchValues:{
          type:Array,
          default:[]
      }
  },
  computed: {
    filterList(value) {
      const key = this.key;
      let valuesList = this.values;
      return valuesList.filter(function(item) {
        return item.trim().indexOf(key.trim()) !== -1;
      });
    }
  },
  methods: {
    toggle() {
      this.isHide = !this.isHide;
    },
    save($event) {
      this.key = $event.target.innerText;
      this.toggle();
    }
  }
};
//toggle 有问题 
</script>

<style lang="scss" scoped>
.v-search {
  .v-search-form {
    width: 210px;
    input {
      width: 100%;
      height: 28px;
      padding-left: 10px;
      border: 1px solid #2a96ff;
      outline: none;
      border-radius: 4px;
      font-size: 14px;
    }
    ul {
         width: 210px;
    padding-left: 10px;
    border: 1px solid #2a96ff;
    margin: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    border-top: 0;
    position: absolute;
    background: #fff;
    z-index: 5;
      li {
        list-style: none;
        padding-left: 0;
        p {
          margin: 0;
        }
      }
    }
  }
}
</style>
