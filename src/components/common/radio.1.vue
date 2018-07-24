<template>
    <div class="radio">
        <input type="radio"   :value="value" :checked="state" @change="updateVal($event.target.name,$event.target.value)" >
        <label for=""><slot></slot></label>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props:{
        name: {
            type:String,
        } ,
        value: {
            type:String,
        },
          checked: {
                type: Boolean,
                default: false,
            },
        modelValue: {   
            default: undefined   
        },
    },
    computed: {   
      state() {   
        if (this.modelValue === undefined) {
            console.log(this.checked);
            return this.checked;
        }
        return this.modelValue == this.value   
      }   
    } ,  
    methods: {
        updateVal: function(key,val) {
              // 2、手动触发父组件的input事件并将值传给父组件
              this.toggle() 
        },
        toggle() {
                // this.$emit('input',key, val); 
                this.$emit('input', this.state ? '' : this.value);
        }
    },
    watch: {
        checked(newValue) {
            if (newValue !== this.state) {
                this.toggle();
            }
        }
    },
     mounted() {
            if (this.checked && !this.state) {
                this.toggle();
            }
        },
 
 

}
</script>
<style lang="scss" scoped>
@import  '~@/styles/util/form.scss';

</style>


