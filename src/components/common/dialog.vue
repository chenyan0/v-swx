<template>
  <transition name="dialog-fade">
    <div class="v-dialog-wrapper" v-show="visible" @click.self="handleWrapperClick">
      <div class="v-dialog" :class="[sizeClass, customClass]" ref="dialog">
        <div class="v-dialog-header">
          <slot name="header">
            <span>{{title}}</span>
          </slot>
          <button type="button" class="v-headerbtn" aria-label="Close" v-if="showClose" @click="handleClose">✖️</button>
        </div>
        <div class="v-dialog-body">
          <slot></slot>
        </div>
        <div class="v-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>

</template>
<script>
export default {
  data() {
    return {
    };
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
     showClose: {
        type: Boolean,
        default: true
      },
      lockScroll: {
        type: Boolean,
        default: true
      },
    closeOnClickModal:{
      type: Boolean,
      default: true
    },
    size:{
      type:String,
      default:'small'
    },
     customClass: {
        type: String,
        default: ''
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
        this.$emit("open");      //打开的回调函数
        // this.$el.addEventListener('scroll', this.updatePopper);
        this.$nextTick(() => {
          console.log( this.$refs.dialog.scrollTop)
          this.$refs.dialog.scrollTop = 0;
        });
      } else {
        // this.$el.removeEventListener('scroll', this.updatePopper);
        this.$emit("close");   //关闭的回调函数
      }
    },
 
  },
  computed:{
    sizeClass:function(){
      return `v-dialog-${this.size}`
    },
   
  },
  methods: {
    handleWrapperClick(){
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
.v-dialog-wrapper {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
  .v-dialog {
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
      padding: 20px 20px 0;
      &:before,
      &:after {
        display: table;
        content: "";
      }
      &:after {
        clear: both;
      }
      .v-headerbtn {
        float: right;
        background: 0 0;
        border: none;
        outline: 0;
        padding: 0;
        cursor: pointer;
        font-size: 16px;
        color: #bfcbd9;
      }
    }
    &-body {
      padding: 30px 20px;
      color: #48576a;
      font-size: 14px;
    }

    &-footer {
      padding: 10px 20px 15px;
      text-align: right;
      box-sizing: border-box;
    }
  }
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
