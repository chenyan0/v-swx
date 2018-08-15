<template>
    <div class="radio">
        <input type="radio"  :id="id"
               :name="name"
               :value="value"
               :class="className"
               :required="required"
               :disabled="disabled"
               @change="onChange"
               :checked="state" >
        <label for=""><slot></slot></label>
    </div>
</template>
<script>
 export default {
        model: {
            prop: 'modelValue',   //指定从父组件传递过来的 props 名称是什么   值为已被选中的value
            event: 'input'   //指定$emit提交的事件名是什么？
        },
        props: {
            id: {
                type: String,
                default: function () {
                    return 'radio-id-' + this._uid;
                },
            },
            name: {
                type: String,
                default: null,
            },
            value: {
                default: '',
            },
            modelValue: {
                default: undefined,
            },
            className: {
                type: String,
                default: null,
            },
            checked: {
                type: Boolean,
                default: false,
            },
            required: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            model: {}
        },
        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked;
                }
                // console.log(this.value);
                return this.modelValue === this.value;
            }
        },
        methods: {
            onChange() {
                this.toggle();
            },
            toggle() {
                this.$emit('input', this.state ? '' : this.value,this.name);
            }
        },
        mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        },
        updated(){
        },
        //  beforeUpdate(){
        //    console.log(this.state);
        //    console.log('modelValue',this.modelValue);
        // },
    }
</script>
<style lang="scss" scoped>
@import  '~@/styles/util/form.scss';

</style>


