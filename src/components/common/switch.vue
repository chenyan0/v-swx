<template>
    <div class="v-switch-wrapper">
        <div :class="wrapperClass"  :style="{ 'width': coreWidth + 'px' }">
            <input type="checkbox" ref="input" :name="name" :id="id" :disabled="disabled" @change="handleChange">
        </div>
        <span>
          <slot></slot>
        </span>
    </div>
</template>
<script>
const prefixCls=`v-switch`
export default {
  data() {
    return {
      coreWidth: this.width
    };
  },
  props: {
       value: {
        type: [Boolean, String, Number],
        default: false
      },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 80
    },
     onValue: {
        type: [Boolean, String, Number],
        default: true
      },
      offValue: {
        type: [Boolean, String, Number],
        default: false
      },
    name: {
      type: String,
      default: ""
    },
    id: String
  },
  computed: {
    wrapperClass(){
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-checked`]:this.checked,
          [`${prefixCls}-disabled`]:this.disabled
        }
      ]
    },
    checked() {
      return this.value === this.onValue;
    }
  },
  watch: {
    checked() {
      this.$refs.input.checked = this.checked;
    }
  },
  mounted() {
    this.$refs.input.checked = this.checked;
  },
  methods: {
    handleChange() {
      this.$emit('change', !this.checked ? this.onValue : this.offValue);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    }
  }
};

</script>
<style lang="scss" scoped>
.v-switch-wrapper {
      font-size: 14px;
  .v-switch {
    width: 80px;
    height: 16px;
    border: 1px solid #eb7200;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    &.v-switch-disabled {
      border: 1px solid #dcdfe6;
      cursor: not-allowed;
      .v-switch-circle {
        background: #dcdfe6;
      }
    }
    &.v-switch-checked {
      &:after {
        left: 24px;
        border: 1px solid #eb7200;
        background: #fff;
      }
      &:before {
        width: 100%;
      }
    }
    input {
      width: 100%;
      height: 100%;
      margin: 0;
      position: relative;
      z-index: 2;
      opacity: 0;
    }
    &:before {
      background: #eb7200;
      border-radius: 16px;
      width: 0;
      position: absolute;
      left: 0;
      height: 100%;
      top: 0;
      transition: width 0.2s ease;
      content: "";
    }
    &:after {
      width: 16px;
      height: 16px;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      background: #eb7200;
      border-radius: 50%;
      position: absolute;
      left: 0;
      top: 0;
      transition: left 0.2s ease;
      content: "";
    }
  }
}
</style>


