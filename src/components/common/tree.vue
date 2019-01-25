<template>
  <li>
    <div
      :class="nodeClasses"
      @click="toggle"
      @dblclick="changeType"
    >
      <font-awesome-icon
        :icon="['fas', 'folder-open']"
        class="icon-folder"
        v-if="opened"
      />
      <font-awesome-icon
        :icon="['fas', 'folder']"
        class="icon-folder"
        v-if="closed"
      />
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
      type: Object,
      default: () => {}
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  data: function() {
    return {
      open: false
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
    addChild: function() {
      this.model.children.push({
        name: "new stuff"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  cursor: pointer;
  font-size: 14px;
  list-style: none;
  > div {
    &:before {
      content: "";
      border: 5px solid transparent;
      height: 0;
      display: inline-block;
      border-left: 5px solid #c0c4cc;
      transition: transform 0.3s ease-in-out;
      vertical-align: middle;
    }
    &.tree-show-icon:before {
      display: none;
    }
  }
  > div.tree-expend:before {
    transform: rotate(90deg);
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
  }
}
</style>
