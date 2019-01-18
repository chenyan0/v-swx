<template>
  <div class="v-select">
    <div
      class="v-select-selection"
      @click="toggle()"
      :class="classes"
    >
      <div
        class="v-select-placeholder"
        ref="placeholder"
        v-show="!hasVal"
      >{{placeholder}}</div>
      <div
        class="v-selected-value"
        v-show="hasVal"
      >{{currentVal.label}}</div>
    </div>
    <div
      class="v-select-dropdown"
      v-show="visible"
    >
      <ul>
        <li
          v-for="(i,index) in values"
          :key="i.id"
          @click="save(i,index)"
          class="v-select-item"
          :class="{'v-select-item-selected':index == idx}"
        >{{i.label}}</li>
      </ul>
      <ul class="v-select-not-found">
        <li>无匹配数据</li>
      </ul>
    </div>
    <span>{{currentVal.value}}</span>
  </div>
</template>
<script>
const prefixCls = "v-select";
export default {
  data() {
    return {
      prefixCls: prefixCls,
      values: this.searchValues,
      visible: false,
      hasVal: false,
      idx:0,
      currentVal:{}
    };
  },
  props: {
    searchValues: {
      type: Array,
      default: []
    },
    placeholder: {
      type: String,
      default: "请选择"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size:{
      type:String,
      default:"middle"
    },
    clearable: {
        type: Boolean,
        default: false
    }
    
  },
  computed: {
    classes() {
      return [
        {
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled,
          // [`${prefixCls}-multiple`]: this.multiple,
          // [`${prefixCls}-single`]: !this.multiple,
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    },
  },
  methods: {
    toggle() {
      if (this.disabled) {
        return false;
      }
      this.visible = !this.visible;
    },
    save(v,id) {
      this.currentVal = v;
      this.idx=id
      this.hasVal = true;
      this.$emit('change',v)
      this.hideMenu();
    },
    hideMenu() {
      this.visible = false;
    }
  }
};
//toggle 有问题
</script>

<style lang="scss" scoped>
$smallHeight:28px;
.v-select {
  display: inline-block;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  color: #657180;
  font-size: 14px;
  line-height: normal;
  &-selection {
    position: relative;
    display: block;
    box-sizing: border-box;
    outline: 0;
    user-select: none;
    cursor: pointer;
    position: relative;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #d7dde4;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    &:hover,&.v-select-visible{
      border-color: #5cadff;
    }
    &.v-select-disabled {
      background-color: #f3f3f3;
      opacity: 1;
      cursor: not-allowed;
      color: #ccc;
    }
    &.v-select-visible{
      box-shadow:  0 0 0 2px rgba(51,153,255,.2)
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 10px;
      border: 6px solid transparent;
      border-top: 8px solid #9ea7b4;
      right: 6px;
      border-bottom: 0;
      transition: all 0.3s ease;
    }
    &.v-select-visible:after {
      transform: rotate(180deg);
    }
    &.v-select-small{
      height: 28px;
        line-height: 28px;
    }
    &.v-select-middle{
      height: 32px;
        line-height: 32px;
    }
    &.v-select-large{
      height: 36px;
      line-height: 36px;
    }
    .v-select-placeholder {
      color: #c3cbd6;
    }
    .v-select-placeholder,
    .v-selected-value {
      display: block;
      height: 100%;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 8px;
      padding-right: 24px;
    }
  }
  &-dropdown {
    width: inherit;
    max-height: 200px;
    overflow: auto;
    margin: 5px 0;
    padding: 5px 0;
    background-color: #fff;
    box-sizing: border-box;
    position: absolute;
    z-index: 900;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    .v-select-not-found {
      display: none;
    }
    .v-select-item {
      margin: 0;
      padding: 7px 16px;
      clear: both;
      color: #657180;
      font-size: 12px !important;
      white-space: nowrap;
      list-style: none;
      cursor: pointer;
      &-focus,
      &:hover {
        background: #f3f3f3;
      }
      &.v-select-item-selected,
      &.v-select-item-selected:hover {
        color: #fff;
        background: rgba(51, 153, 255, 0.9);
      }
    }
  }
    
}
</style>
