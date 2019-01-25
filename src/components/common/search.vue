<template>
  <div class="v-select">
    <div
      class="v-select-selection"
      @click="toggleMenu()"
      :class="classes"
    >

      <div :class="singleDisplayClasses">{{currentVal.label || singleDisplayValue}}</div>
      <font-awesome-icon
        :icon="['far', 'times-circle']"
        class="icon-clear"
        v-if="resetSelect"
        @click.stop="onClear"
      />
      <font-awesome-icon
        :icon="['fas', 'caret-down']"
        class="icon-arrow"
        v-if="!resetSelect && !disabled"
      />
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
      <ul class="v-select-not-found" v-show="showNotFoundLabel">
        <li>{{notFoundText}}</li>
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
      idx:0,
      currentVal:[],
      remoteInitialLabel: this.initialLabel,
      showCloseIcon:this.clearable
    };
  },
  props: {
    searchValues: {
      type: Array,
      default: () => []
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
    },
    multiple: {
        type: Boolean,
        default: false
    },
    initialLabel: {
        type: [String, Number, Array],
    },
    notFoundText: {
        type: String
    },
    
  },
  computed: {
    classes() {
      return [
        {
          [`${prefixCls}-visible`]: this.visible,
          [`${prefixCls}-disabled`]: this.disabled,
          [`${prefixCls}-show-clear`]: this.showCloseIcon,
          [`${prefixCls}-${this.size}`]: !!this.size
        }
      ];
    },
    resetSelect(){
        return !this.showPlaceholder && this.clearable;
    },
    singleDisplayClasses(){
        const {filterable, multiple, showPlaceholder} = this;
        return [{
            [prefixCls + '-placeholder']: showPlaceholder,
            [prefixCls + '-selected-value']: !showPlaceholder && !multiple,
        }];
    },
    singleDisplayValue(){
        return `${this.selectedSingle}` || this.placeholder;
    },
    showPlaceholder(){
      let status = false;
      if (!this.multiple) {
          const value = this.currentVal[0];
          if (typeof value === 'undefined' || String(value).trim() === ''){
            status = !this.remoteInitialLabel;
          }
      } else {
        if (!this.currentVal.length > 0) {
          status = true;
          }
      }
      return status
    },
    selectedSingle(){
      const selected = this.currentVal[0];
      return selected ? selected.label : this.placeholder
    },
    showNotFoundLabel () {
        const {searchValues} = this;
        return searchValues && searchValues.length==0;
    },
  },
  methods: {
    toggleMenu(e, force) {
      if (this.disabled) {
        return false;
      }
      this.visible = typeof force !== 'undefined' ? force : !this.visible;
    },
    save(v,id) {
      if(!this.multiple){
        this.reset()
      }
      this.currentVal.push(v)
      this.idx=id
      this.$emit('change',v.value)
      this.hideMenu();
    },
    hideMenu() {
      this.toggleMenu(null, false);
    },
    reset(){
      this.currentVal=[]
    },
    onClear(){
      this.hideMenu()
      if (this.clearable) this.reset();
    }
  }
};
//toggle 有问题
</script>

<style lang="scss" scoped>
$smallHeight: 28px;
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
    .icon-clear,
    .icon-arrow {
      position: absolute;
      top: 50%;
      right: 6px;
      transform: translate(0, -50%);
      color: #9ea7b3;
    }
    .icon-arrow {
      font-size: 22px;
      transition: transform 0.3s ease;
    }
    &:hover,
    &.v-select-visible {
      border-color: #5cadff;
    }
    &.v-select-disabled {
      background-color: #f3f3f3;
      opacity: 1;
      cursor: not-allowed;
      color: #ccc;
    }
    &.v-select-visible {
      box-shadow: 0 0 0 2px rgba(51, 153, 255, 0.2);
      .icon-arrow {
        transform: translate(0, -50%) rotate(180deg);
      }
    }
    &.v-select-small {
      height: 28px;
      line-height: 28px;
    }
    &.v-select-middle {
      height: 32px;
      line-height: 32px;
    }
    &.v-select-large {
      height: 36px;
      line-height: 36px;
    }
    .v-select-placeholder {
      color: #c3cbd6;
    }
    .v-select-placeholder,
    .v-select-selected-value {
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
    .v-select-item,.v-select-not-found  li {
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
