<template>
    <div class="checkbox-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data(){
        return{
            currentValue: this.value,
            children:[],
            componentName:'VCheckboxGroup'
        }
    },
    props:{
         value: {
                type: Array,
                default () {
                    return [];
                }
            },
    },
    mounted(){
        this.updateModel(true);
    },
    methods:{
        updateModel(update){
               if (this.$children) {
                    const { value } = this;
                    this.$children.forEach(child => {
                        child.model = value;
                        if (update) {
                            child.currentValue = value.indexOf(child.label) >= 0;
                            child.group = true;
                        }
                    });
                }
        },
        change(data){
            this.currentValue = data;
            this.$emit('on-change', data);
        }
    },
    watch: {
            value () {
                this.updateModel(true);
            }
        }
}
</script>
<style lang="scss" scoped>

</style>

