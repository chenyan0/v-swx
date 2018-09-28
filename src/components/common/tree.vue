<template>
    <div class="v-tree">
        <ul class="v-tree-node" v-for="(item, index) in data" :key="index" :is-expanded="item.children ? true : false">
            <li @click="toggleDown(item,index)" :class="{expanded:scope[index]}">{{item.name}}</li>
            <tree-menu :data="item.children"  v-if="scope[index]"></tree-menu>
        </ul>
    </div>
</template>
<script>
export default {
  name: "treeMenu", //递归组件 必须有name
  data() {
    return {
      scope: [],
      expanded: false,
    };
  },
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  computed: {
  
  },
  methods: {
    doTask(index) {
      this.$set(this.scope, index, !this.scope[index]);
    },
    toggleDown(item, index) {
      if (item.children && item.children.length) {
        this.doTask(index);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
ul {
  padding-left: 0;
}
.v-tree {
  ul.v-tree-node {
    font-size: 14px;
    li {
      cursor: pointer;
      list-style: none;
      display: flex;
      align-items: center;
      height: 26px;
      &.expanded+.v-tree{
    padding-left: 20px;

      }
    }
    &[is-expanded] > li:before {
      content: "";
      border: 4px solid transparent;
      height: 0;
      display: inline-block;
      border-left: 4px solid #c0c4cc;
      margin-right: 6px;
      transition: transform 0.3s ease-in-out;
    }
    &[is-expanded] > li.expanded:before {
      transform: rotate(90deg);
    }
  }
}
</style>

