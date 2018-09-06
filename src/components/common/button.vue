<template>
    <button :type="nativeType" :disabled="disabled" class="custom-button" :class="['custom-button-'+type,'custom-button-'+size,{'is-disabled':disabled}]" @click="handleClick">
          <div v-if="loading" class="loading"></div>
        <slot></slot>
    </button>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    nativeType: String,
    disabled: Boolean,
    loading: Boolean,
     nativeType: {
        type: String,
        default: 'button'
      },
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: "large"
    }
  },
  methods:{
    handleClick(evt){
      this.$emit('click',evt)
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>

$button-default-color: #656b79;
$button-default-background-color: #f6f8fa;
$button-primary-color: #fff;
$button-primary-background-color: #26a2ff;
$button-primary-hover-color: #66b1ff;
$button-primary-active-color: #3a8ee6;
$button-primary-disabled-color: #a0cfff;
$button-danger-color: #fff;
$button-danger-background-color: #ef4f4f;
$button-danger-hover-color: #f78989;
$button-danger-active-color: #dd6161;
$button-danger-disabled-color: #fab6b6;
$button-warning-color: #fff;
$button-warning-background-color: #e3a04f;
$button-warning-hover-color: #ebb563;
$button-warning-active-color: #cf9236;
$button-warning-disabled-color: #f3d19e;
$button-info-color: #fff;
$button-info-background-color: #909399;
$button-info-hover-color: #a6a9ad;
$button-info-active-color: #82848a;
$button-info-disabled-color: #c8c9cc;
$button-success-color: #fff;
$button-success-background-color: #6dbe4c;
$button-success-hover-color: #85ce61;
$button-success-active-color: #5daf34;
$button-success-disabled-color: #b3e19d;
.loading{
    width: 20px;
    height: 20px;
    vertical-align: middle;
    display: inline-block;
    margin-right: 10px;
    border: 2px solid;
    border-color:#fff #fff transparent;
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-animation: loading 1s linear infinite;
    animation: loading 1s linear infinite;
}
@keyframes loading{
  0%{
      transform: rotate(0deg);
  }
  100%{
      transform: rotate(360deg);
  }
}
.custom-button {
  appearance: none;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid #dcdfe6;
  color: inherit;
  display: block;
  font-size: 18px;
  height: 41px;
  outline: 0;
  transition: 0.1s;
  overflow: hidden;
  position: relative;
  text-align: center;
  margin: 10px 0;

  &::after {
    background-color: #000;
    content: " ";
    opacity: 0;
    position: absolute 0 0 0 0;
  }
  &:not(.is-disabled):active::after {
    opacity: 0.4;
  }
  &.is-disabled ,  &.is-disabled:hover{
    color: #c0c4cc;
    cursor: not-allowed;
    background-image: none;
    background-color: #fff;
    border-color: #ebeef5;
  }
  &-#{default} {
    color: $button-default-color;
    .loading{
       border-color:$button-default-color $button-default-color transparent;
    }
    &:hover,
    &:focus {
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
       .loading{
        border-color:#409eff #409eff transparent;
      }
    }
    &:active,
    &.is-active {
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none;
       .loading{
       border-color:#3a8ee6 #3a8ee6 transparent;
    }
    }
  }
  &-#{primary} {
    color: $button-primary-color;
    background: $button-primary-background-color;
    border-color: $button-primary-background-color;

    &:hover,
    &:focus {
      background: $button-primary-hover-color;
      border-color: $button-primary-hover-color;
      color: #fff;
    }
    &.is-active,
    &:active {
      background: $button-primary-active-color;
      border-color: $button-primary-active-color;
      color: #fff;
    }
    &.is-disabled ,&.is-disabled:hover{
      color: #fff;
    background-color: $button-primary-disabled-color;
    border-color: $button-primary-disabled-color;
    }
  }

  &-#{warning} {
    color: $button-warning-color;
    background: $button-warning-background-color;
    border-color: $button-warning-background-color;

    &:hover,
    &:focus {
      background: $button-warning-hover-color;
      border-color: $button-warning-hover-color;
      color: #fff;
    }
    &.is-active,
    &:active {
      background: $button-warning-active-color;
      border-color: $button-warning-active-color;
      color: #fff;
    }
    &.is-disabled ,&.is-disabled:hover{
      color: #fff;
      background-color: $button-warning-disabled-color;
      border-color: $button-warning-disabled-color;
    }
  }
  &-#{success} {
    color: $button-success-color;
    background: $button-success-background-color;
    border-color: $button-success-background-color;

    &:hover,
    &:focus {
      background: $button-success-hover-color;
      border-color: $button-success-hover-color;
      color: #fff;
    }
    &.is-active,
    &:active {
      background: $button-success-active-color;
      border-color: $button-success-active-color;
      color: #fff;
    }
    &.is-disabled,&.is-disabled:hover {
      color: #fff;
      background-color: $button-success-disabled-color;
      border-color:  $button-success-disabled-color;
    }
  }
  &-#{info} {
    color: $button-info-color;
    background: $button-info-background-color;
    border-color: $button-info-background-color;

    &:hover,
    &:focus {
      background: $button-info-hover-color;
      border-color: $button-info-hover-color;
      color: #fff;
    }
    &.is-active,
    &:active {
      background: $button-info-active-color;
      border-color: $button-info-active-color;
      color: #fff;
    }
    &.is-disabled,&.is-disabled:hover {
      color: #fff;
      background-color: $button-info-disabled-color;
      border-color: $button-info-disabled-color;
    }
  }
  &-#{danger} {
    color: $button-danger-color;
    background: $button-danger-background-color;
    border-color: $button-danger-background-color;

    &:hover,
    &:focus {
      background:  $button-danger-hover-color;
      border-color:  $button-danger-hover-color;
      color: #fff;
    }
    &.is-active,
    &:active {
      background: $button-danger-active-color;
      border-color: $button-danger-active-color;
      color: #fff;
    }
    &.is-disabled ,&.is-disabled:hover{
      color: #fff;
      background-color:  $button-danger-disabled-color;
      border-color: $button-danger-disabled-color;
    }
  }
}

.custom-button-large {
  display: block;
  width: 100%;
}
.custom-button-normal {
  display: inline-block;
  padding: 0 12px;
}
.custom-button-small {
  display: inline-block;
  font-size: 14px;
  padding: 0 12px;
  height: 33px;
}
</style>

