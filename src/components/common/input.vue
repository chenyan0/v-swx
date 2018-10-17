<template>
    <div class="v-input">
        <div class="v-input-wrapper" :class="[{'v-input-focus':isFocus}]">
            <div class="v-input-table">
                <div class="v-input-prefix"></div>
                <div class="v-input-infix">
                    <input ref="input" :name="name" :id="id" class="v-input-trigger" :value="value" :type="type"  @focus="handleFocus()" @blur="handleBlur()"  @input="$emit('input', $event.target.value)">
                    <div class="v-input-placeholder" :class="[{'v-float':isFloat}]">{{placeholder}}</div>
                </div>
                <div class="v-input-suffix"></div>
            </div>
            <div class="v-input-underline"></div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      isFocus: false,
      isFloat: this.value ? true : false,
    };
  },
  props: {
    name: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    value:{
        type:String,
        default:""
    },
    type:{
        type:String,
        default:""
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    handleFocus() {
      this.isFloat = true
      this.isFocus = true;
    },
    handleBlur() {
        this.isFloat = this.value ? true : false
        this.isFocus = false;
    }
  },
  computed:{
   
  }
};
</script>

<style lang="scss" scoped>
.v-input {
  display: inline-block;
  position: relative;
  line-height: normal;
  text-align: left;
  .v-input-wrapper {
  margin: 10px 0;
  .v-input-table {
    display: inline-table;
    flex-flow: column;
    vertical-align: bottom;
    width: 100%;
    > * {
      display: table-cell;
    }
    .v-input-infix {
      position: relative;
      .v-input-trigger {
        font: inherit;
        background: transparent;
        color: currentColor;
        border: none;
        outline: none;
        padding: 0;
        width: 100%;
      }
      .v-input-placeholder {
        position: absolute;
        left: 0;
        top: 0;
        display: block;
        font-size: 100%;
        pointer-events: none;
        z-index: 1;
        width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow-x: hidden;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        -webkit-transform-origin: bottom left;
        transform-origin: bottom left;
        color: rgba(0, 0, 0, 0.38);
        transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
          scale 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
          color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
          width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1),
          -webkit-transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
          &.v-float{
                 transform: translateY(-15px);
          font-size: 12px;

          }
      }
    }
  }
  .v-input-underline {
    position: absolute;
    height: 1px;
    width: 100%;
    margin-top: 4px;
    border-top-width: 1px;
    border-top-style: solid;
    border-color: rgba(0, 0, 0, 0.38);
  }
  &.v-input-focus {
    .v-input-table {
      .v-input-infix {
        .v-input-placeholder {
          color: #39f;
        }
      }
    }
    .v-input-underline {
      border-top-width: 2px;
      border-color: #39f;
    }
  }
}
}

</style>

