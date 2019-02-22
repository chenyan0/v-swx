<template>
<transition name="move-up">
  <div
    :class="classes"
    :style="{top:top+ 'px'}"
    v-if="show"
  >
    <div class="v-message-notice  ">
      <div class="v-message-notice-content">
        <font-awesome-icon
          :icon="['fas', icon]"
          class="v-icon"
        />
        {{text}}
      </div>
    </div>
  </div>
</transition>

</template>
<script>
export default {
  name: "message",
  props: {
    duration: Number
  }
};
</script>

<style lang="scss" scoped>
$class-prefix: "v-message";
$success-color:green;
$warning-color:orange;
$error-color:red;
.#{$class-prefix} {
  font-size: 12px;
  position: fixed;
  z-index: 1010;
  width: 100%;
  left: 0;
  color: #657180;
  .v-icon {
    color: #15a0ff;
  }

}
.#{$class-prefix}-success {
.v-icon {
    color: $success-color;
}
}
.#{$class-prefix}-warning {
.v-icon {
    color: $warning-color;
}
}
.#{$class-prefix}-error {
.v-icon {
    color: $error-color;
}
}
.#{$class-prefix}-loading {
.v-icon {
    animation: loading .8s infinite linear;
}
}
.#{$class-prefix}-notice {
  width: auto;
  vertical-align: middle;
  position: absolute;
  left: 50%;
  &-content {
    position: relative;
    right: 50%;
    padding: 8px 16px;
    display: block;
    border-radius: 4px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
    background: #fff;
  }
}
.move-up-enter-active{
  animation: moveIn 3s;
}
.move-up-leave-active{
  animation: moveOut 3s;
}
@keyframes moveIn {
    0% {
    transform: translate3d(0,-20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes moveOut {
 0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
@keyframes loading{
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg)
    }
}
</style>
