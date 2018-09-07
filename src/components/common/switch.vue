<template>
    <div class="v-switch">
        <div class="v-switch-wrapper" :class="{'is-disabled':disabled,'is-checked':checked}" :style="{ 'width': coreWidth + 'px' }">
            <input type="checkbox" ref="input" :name="name" :id="id" :disabled="disabled" @change="handleChange">
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {
  data() {
    return {
      coreWidth: this.width
    };
  },
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 80
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
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
    checked() {
        console.log(1)
      return this.value === this.activeValue;
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
      //       this.$nextTick(() => {
      //   // set input's checked property
      //   // in case parent refuses to change component's value
      //   this.$refs.input.checked = this.checked;
      // });
    }
  }
};
</script>
<style lang="scss" scoped>
.v-switch {
  .v-switch-wrapper {
    width: 80px;
    height: 16px;
    border: 1px solid #eb7200;
    border-radius: 16px;
    position: relative;
    overflow: hidden;
    &.is-disabled {
      border: 1px solid #dcdfe6;
      cursor: not-allowed;
      .v-switch-circle {
        background: #dcdfe6;
      }
    }
    &.is-checked {
      &:after {
        left: 50px;
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
      // opacity: 0;
    }
    &:before {
      background: #eb7200;
      border-radius: 16px;
      width: 0;
      position: absolute;
      left: 0;
      height: 100%;
      top: 0;
      transition: width 0.5s ease;
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
      transition: left 0.6s ease;
      content: "";
    }
  }
}
</style>


