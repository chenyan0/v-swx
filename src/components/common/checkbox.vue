<template>
<div class="checkbox " :class="{'checkbox-checked':this.currentValue}">
    <div class="checkbox-inner" >
        <input type="checkbox" class="checkbox-input" :value="value" :checked="currentValue"  @change="change" >
        <span></span>
    </div>
    <span>
        <slot></slot>
        </span>
</div>
</template>
<script>
export default {
    data(){
        return{
            values:[],
            currentValue:this.value
        }
    },
    props:{
        value:{
            type:String,
            default:false
        },
         checked:{
            type:Boolean,
            default:false
        },
        trueVal:{
            type:Boolean,
            default:true
        },
        falseVal:{
            type:Boolean,
            default:false
        }
    },
    methods:{
        change(event){
            const checked = event.target.checked;
            const value = checked ? this.trueValue : this.falseValue;
            
           let obj={};
            obj[event.target.value]=event.target.value;
            this.currentValue = checked;
            this.values.push(obj);
            this.$emit('change',this.currentValue);
            console.log(event.target.value)
        } ,
        updateModel () {
            this.currentValue = this.value === this.trueValue;
        },
    },
    watch:{
        value (val) {
                if (val === this.trueValue || val === this.falseValue) {
                    this.updateModel();
                } else {
                    throw 'Value should be trueValue or falseValue.';
                }
            }
    }

}
</script>
<style lang="scss" scoped>
.checkbox, .checkbox-inner {
    display: inline-block;
    position: relative;
}
.checkbox {
        vertical-align: middle;
    white-space: nowrap;
    cursor: pointer;
    outline: 0;
    line-height: 1;
.checkbox-inner{
        width: 14px;
    height: 14px;
    top: 0;
    left: 0;
    border: 1px solid #d7dde4;
    border-radius: 2px;
    background-color: #fff;
    -webkit-transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
    transition: border-color .2s ease-in-out,background-color .2s ease-in-out;
    .checkbox-input {
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
.checkbox-checked .checkbox-inner {
    border-color: #39f;
    background-color: #39f;
    &:after {
        content: '';
        display: table;
        width: 4px;
        height: 8px;
        position: absolute;
        top: 1px;
        left: 4px;
        border: 2px solid #fff;
        border-top: 0;
        border-left: 0;
        -webkit-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
        -webkit-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
    }
}
</style>

