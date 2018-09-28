<template>
    <div :class="wrapperClasses">
        <div class="v-checkbox-inner">
            <input v-if="group" type="checkbox" class="v-checkbox-input" v-model="model" :value="label" :name="name" :disabled="disabled"  @change="change">
            <input v-else type="checkbox" class="v-checkbox-input" :value="label" :name="name" :disabled="disabled" :checked="currentValue" @change="change">
        </div>
        <span>
          <slot>
            {{label}}
          </slot>
        </span>
    </div>
</template>
<script>
  const prefixCls=`v-checkbox`;
export default {
  data() {
    return {
      // values:[],
      model: [],
      currentValue: this.value,
      showSlot: true,
      group:false
    };
  },
 
  props: {
    // value: {
    //   type: String,
    //   default: ''
    // },
    checked: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ""
    },
    trueValue: {
      type: Boolean,
      default: true
    },
    falseValue: {
      type: Boolean,
      default: false
    },
    label: {
      type: [String, Number, Boolean]
    },
  },
   computed:{
    wrapperClasses(){
      return [
        `${prefixCls}`,
        {

          [`${prefixCls}-checked`]:this.currentValue,
          [`${prefixCls}-disabled`]:this.disabled,
        }
        
      ]

    }
  },
  mounted(){
      if(this.$parent.$options.componentName=='VCheckboxGroup'){
        this.group=true;
      }
      if(this.group){
        this.$parent.updateModel(true);
      } else {
          this.updateModel();
          this.showSlot = this.$slots.default !== undefined;
      }
  },
  methods: {
    change(event) {
      if (this.disabled) {
        return false;
      }
      const checked = event.target.checked;
      this.currentValue = checked;
      const value = checked ? this.trueValue : this.falseValue;
      this.$emit('input', value);

      if (this.group) {

          this.$parent.change(this.model);
      }else {
        this.$emit("on-change", value);
}
    },
    updateModel() {
      this.currentValue = this.value === this.trueValue;
    }
  },
  watch: {
    value(val) {
      if (val === this.trueValue || val === this.falseValue) {
        this.updateModel();
      } else {
        throw "Value should be trueValue or falseValue.";
      }
    },
    model(val){
    }
  }
};
</script>
<style lang="scss" scoped>
.v-checkbox,
.v-checkbox-inner {
  display: inline-block;
  position: relative;
}
.v-checkbox {
  vertical-align: middle;
  white-space: nowrap;
  cursor: pointer;
  outline: 0;
  margin-right: 20px;
      display: inline-flex;
    align-items: center;
  &.v-checkbox-disabled {
    .v-checkbox-inner {
      background-color: #eee;
    }
  }
  .v-checkbox-inner {
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    border:1px solid #b3b3b3;
    border-radius: 2px;
    background-color: #fff;
    margin-right: 8px;
    -webkit-transition: border-color 0.2s ease-in-out,
      background-color 0.2s ease-in-out;
    transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    .v-checkbox-input {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 1;
      cursor: pointer;
      opacity: 0;
      margin: 0;
    }
  }
}
.v-checkbox-checked .v-checkbox-inner {
  border-color: #39f;
  background-color: #39f;
  &:after {
    content: "";
    display: table;
       width: 6px;
    height: 12px;
    position: absolute;
    top: 2px;
    left: 6px;
    border: 2px solid #fff;
    border-top: 0;
    border-left: 0;
    -webkit-transform: rotate(45deg) scale(1);
    transform: rotate(45deg) scale(1);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
  }
}
</style>

