<template>
  <div class="v-switch-wrapper">
    <div :class="wrapperClass">
      <input type="checkbox" ref="input" :name="name" :id="id" :disabled="disabled" @change="handleChange">
    </div>
    <span>
      <slot></slot>
    </span>
  </div>
</template>
<script>
const prefixCls = `v-switch`;
export default {
  data() {
    return {
      // coreWidth: this.width
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
    size: {
      type: String,
      default: 'small'
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
    wrapperClass() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-`+this.size]: this.size,
          [`${prefixCls}-checked`]: this.checked,
          [`${prefixCls}-disabled`]: this.disabled
        }
      ];
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
      this.$emit("change", !this.checked ? this.onValue : this.offValue);
      this.$nextTick(() => {
        this.$refs.input.checked = this.checked;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$height:20px;
$width:40px;
$higher-color:#39f;
$lighter-color:#dcdfe6;
.v-switch-wrapper {
  font-size: 14px;
  .v-switch {
    width: $width;
    height: $height;
    border: 1px solid $higher-color;
    border-radius: $height;
    position: relative;
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    &.v-switch-disabled {
      border: 1px solid $lighter-color;
      cursor: not-allowed;
      .v-switch-circle {
        background: $lighter-color;
      }
    }
    &.v-switch-checked {
      &:after {
        left: $width - $height;
        border: 1px solid $higher-color;
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
      cursor: pointer;
    }
    &:before {
      background: $higher-color;
      border-radius: $height;
      width: 0;
      position: absolute;
      left: 0;
      height: 100%;
      top: 0;
      transition: width 0.2s ease;
      content: "";
    }
    &:after {
      width: $height;
      height: $height;
      border: 1px solid #ffffff;
      box-sizing: border-box;
      background: $higher-color;
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


