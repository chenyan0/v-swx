<template>
  <li>
    <div
      :class="nodeClasses"
      @dblclick="changeType"
    >
      <font-awesome-icon
        :icon="['fas', open ? 'caret-down' : 'caret-right']"
        class="icon-arrow"
        @click="toggle"
        v-if="!showIcon && isFolder"
      />
      <font-awesome-icon
        :icon="['fas', opened ? 'folder-open' : 'folder']"
        class="icon-folder"
        @click="toggle"
        v-if="showIcon && isFolder"
      />
      <input  type="checkbox" name="tree-node" v-if="showCheckbox" :value="model.id" v-model="model.checked" @click="handleCheck($event,model)"/>
      <span>{{ model.name }}</span>
    </div>
    <ul
      v-show="open"
      v-if="isFolder"
    >
      <node-leaf
        class="item"
        v-for="(model, index) in model.children"
        :key="index"
        :model="model"
        :showIcon="showIcon"
        :showCheckbox="showCheckbox"
      >
      </node-leaf>
    </ul>
  </li>
</template>
<script>
export default {
  name: "node-leaf",
  props: {
    model: {
      type: [Object,Array],
      default: () => {}
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showCheckbox:{
       type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      open: false,
    };
  },
  computed: {
    isFolder: function() {
      return this.model.children && this.model.children.length;
    },
    opened: function() {
      return this.open && this.isFolder && this.showIcon;
    },
    closed: function() {
      return !this.open && this.isFolder && this.showIcon;
    },
    nodeClasses: function() {
      return [
        {
          ["tree-leaf"]: !this.isFolder,
          ["tree-show-icon"]: this.showIcon,
          ["tree-expend"]: this.open
        }
      ];
    }
  },
  methods: {
    toggle: function() {
      if (this.isFolder) {
        this.open = !this.open;
      }
    },
    changeType: function() {
      if (!this.isFolder) {
        this.$set(this.model, "children", []);
        // this.addChild();
        // this.open = true;
      }
    },
    handleCheck: function($event,el){
      if(el.children){
        el.children.map(element => {
          // element.checked=$event.target.checked
          // return { ...element }
          this.$set(element,'checked',$event.target.checked)
          this.handleCheck($event,element)
        });
      }
    },
  }
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  font-size: 14px;
  list-style: none;
  line-height: 26px;
    color: #444444;
  > div {
    &.tree-show-icon:before {
      display: none;
    }
  }
  ul {
    padding-left: 1em;
  }
  .tree-leaf {
    padding-left: 1em;
    &:before {
      display: none;
    }
  }
  .icon-folder {
    font-size: 12px;
        vertical-align: middle;
  }
  .icon-arrow{
    font-size: 16px
  }
}
</style>
