<template>
  <transition name="fade">
    <div class="v-dialog-wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div class="v-dialog" :class="[sizeClass, customClass]" ref="dialog">
        <button type="button" class="v-headerbtn" aria-label="Close" v-if="showClose" @click="handleClose">×</button>
        <div class="v-dialog-header" v-if="title || $slots.header">
          <span>{{title}}</span>
          <slot name="header"></slot>
        </div>
        <div class="v-dialog-body">
          <slot></slot>
        </div>
        <div class="v-dialog-footer">
          <slot name="footer">
            <v-button type="primary" size="small" @click="handleOk">{{okText}}</v-button>
            <v-button type="default" size="small" @click="handleCancel">{{cancelText}}</v-button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import VButton from "./button";
  export default {
    components: {
      VButton
    },
    data() {
      return {};
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: ""
      },
      okText: {
        type: String,
        default: "确定"
      },
      cancelText: {
        type: String,
        default: "取消"
      },
      showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
      closeOnClickModal: {
        type: Boolean,
        default: true
      },
      size: {
        type: String,
        default: "small"
      },
      customClass: {
        type: String,
        default: ""
      },
  
      beforeClose: Function
    },
    mounted() {
      if (this.visible) {
        this.rendered = true;
        this.open();
      }
    },
  
    watch: {
      visible(val) {
        this.$emit("update:visible", val);
        if (val) {
          this.$emit("open"); //打开的回调函数
          this.$nextTick(() => {
            console.log(this.$refs.dialog.scrollTop);
            this.$refs.dialog.scrollTop = 0;
          });
        } else {
          this.$emit("close"); //关闭的回调函数
        }
      }
    },
    computed: {
      sizeClass: function() {
        const prefix = "v-dialog";
        return `${prefix}-${this.size}`;
      }
    },
    methods: {
      handleWrapperClick() {
        if (!this.closeOnClickModal) return;
        this.handleClose();
      },
      handleClose() {
        if (typeof this.beforeClose === "function") {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      handleOk() {
        this.hide();
        this.$emit("on-ok", true);
      },
      handleCancel() {
        this.hide();
        this.$emit("on-cancel", false);
      },
      hide(cancel) {
        if (cancel !== false) {
          this.$emit("update:visible", false);
          this.$emit("visible-change", false);
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  $prefix: "v-dialog";
  .#{$prefix}-wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow: auto;
    margin: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
    .#{$prefix} {
      position: absolute;
      left: 50%;
      top: 50%;
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      background: #fff;
      border-radius: 2px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
      box-sizing: border-box;
      margin-bottom: 50px;
      .v-headerbtn {
        border: 0;
        position: absolute;
        right: 20px;
        top: 12px;
        color: #bfbfbf;
        font-size: 20px;
        line-height: 1;
        outline: none;
      }
      &-center {
        text-align: center;
      }
      &-tiny {
        width: 30%;
      }
      &-small {
        width: 50%;
      }
      &-large {
        width: 90%;
      }
      &-header {
        border-bottom: 1px solid #e3e8ee;
        padding: 14px 16px;
        span {
          font-size: 14px;
          color: #464c5b;
          font-weight: 700;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      &-body {
        padding: 16px;
        color: #48576a;
        font-size: 14px;
      }
      &-footer {
        border-top: 1px solid #e3e8ee;
        padding: 12px 18px;
        text-align: right;
      }
    }
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  
  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
  
  .dialog-fade-enter-active {
    animation: dialog-fade-in 0.3s;
  }
  
  .dialog-fade-leave-active {
    animation: dialog-fade-out 0.3s;
  }
  
  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  
  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -20px, 0);
      opacity: 0;
    }
  }
</style>
