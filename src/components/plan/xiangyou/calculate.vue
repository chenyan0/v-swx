<template>
    <form @submit.prevent="submit"  class="block-form">
        <label for="">被保险人信息</label>
        <div class="f-cells">
            <div class="f-cell">
                <label for="name">姓名</label>
                <div class="inline">
                    <input type="text" placeholder="请输入" v-model.lazy="form.name" ref="name" name="name">
                </div>
            </div>

            <div class="f-cell">
                <label for="age">年龄</label>
                <div class="inline">
                    <input type="number" placeholder="0-70周岁" v-model.lazy="$v.form.age.$model" ref="age" name="age">
                </div>
            </div>
            <div class="f-cell">
                <label for="age">性别</label>
                <div class="inline">
                    <radio  name="sex"  value="1" @input="onInput" v-model="form.sex" checked>男</radio>
                    <radio  name="sex"  value="0" @input="onInput" v-model="form.sex" >女</radio>
                </div>
            </div>
        </div>
        <label for="">保险信息</label>
        <div class="f-cells">
            <div class="f-cell">
                <label for="insuranceMoney">基本保额</label>
                <div class="inline">
                    <input type="text" placeholder="请输入" v-model="form.insuranceMoney">
                    <span>元</span>
                </div>
            </div>
            <div class="f-cell">
                <label for="paymentMethod">交费方式</label>
                <div class="inline">
                    <radio  name="paymentMethod"  value="1" @input="onInput" v-model="form.paymentMethod" checked>年交</radio>
                    <radio  name="paymentMethod"  value="12" @input="onInput" v-model="form.paymentMethod">月交</radio>
                </div>
            </div>
             <div class="f-cell block">
                <label for="paymentMethod">交费年期</label>
                <div class="inline">
                    <radio  name="payTimeLimit"  value="1" @input="onInput" v-model="form.payTimeLimit" >一次缴清</radio>
                    <radio  name="payTimeLimit"  value="3"  @input="onInput" v-model="form.payTimeLimit">3年</radio>
                    <radio  name="payTimeLimit"   value="5" @input="onInput"  v-model="form.payTimeLimit">5年</radio>
                    <radio  name="payTimeLimit"   value="10" @input="onInput"  v-model="form.payTimeLimit" checked>10年</radio>
                    <radio  name="payTimeLimit"   value="15" @input="onInput"  v-model="form.payTimeLimit">15年</radio>
                    <radio  name="payTimeLimit"  value="20" @input="onInput"  v-model="form.payTimeLimit">20年</radio>
                </div>
            </div>
            <div class="f-cell">
                <label for="insuranceMoney">年交保费</label>
                <div class="inline">
                    <input type="text" name="insuranceExpenses" v-model="insuranceExpenses" >
                    <span>元</span>
                </div>
            </div>
            <div class="f-cell">
                <label for="insuranceMoney">保费合计</label>
                <div class="inline">
                    <input type="text"  name="cum_Prem" v-model="cum_Prem" >
                    <span>元</span>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" class="btn-submit">生成计划书</mt-button>
         </form>
</template>
<script>
import { required, minLength, between } from 'vuelidate/lib/validators'

import radio from '../../common/radio';
import { MessageBox } from 'mint-ui';
export default {
    components:{
        radio
    },  
    data() {
        return {
            form:{
                name: "",
                age: "",
                insuranceMoney: 10000,
                sex:"",
                paymentMethod:'',
                payTimeLimit:''
            },
            submitStatus: null,
            insuranceExpenses:"",
            cum_Prem:"",
        }
    },
    validations: {
        form:{
            // name: {
            //     minLength: minLength(4)
            // },
            age: {
                required,
                between: between(0, 70)
            }
        }
    },
    watch:{
        "form":{   
             handler:function(val,oldval){
               if(this.$v.form.age.$error){
                    setTimeout(function(){
                        MessageBox('提示', '请检查年龄信息');
                    },500)
                    return;
                }else{
                    this.fetchData()
                }
            },
            deep:true
      }
    },
   computed:{
       age:function(){
           if(this.age==''){
                setTimeout(function(){
                    MessageBox('提示', '请填写年龄信息');
                },500)
           }
       }
   },
 
    methods:{
        onInput:function(state,key) {
          this.form[key]=state;
        },
        fetchData:function(){
            const formData = JSON.stringify(this.form);
            requestGetCalculus(formData).then((res)=>{
                if(res.status=='200'){
                    this.insuranceExpenses=res.data.insuranceExpenses;
                    this.cum_Prem=res.data.cum_Prem;
                }    
            }).catch((error)=>{
                console.log(error);
            });
        },
        submit:function(){
            const formData = JSON.stringify(this.form); // 这里才是你的表单数据
            if (this.$v.$invalid) {
                MessageBox('提示', '请完善数据信息');
            } else {
                this.$router.push({ path: 'result', query: this.form})
            }
        }
    },
    // beforeCreate:function(){
    //     console.log('实例初始化前吗？')
    // },
    // created:function(){
    //     console.log('初始化完成后立即调用，挂载阶段还没开始，$el不可用');
    // },
    // beforeMount:function(){
    //     console.log('挂载开始之前调用');
    // },
    // mounted:function(){
    //     console.log('挂载完成之后调用，$el可用');
    // },
    // beforeUpdate:function(){
    //      console.log('数据更新时调用');
    // },
    // updated:function(){
    //     this.$nextTick()
    //      console.log('数据更新后DOM重新渲染，之后调用');
    // },
    // beforeDestroy:function(){
    //      console.log('实例销毁之前调用');

    // },
    // destroyed:function(){
    //      console.log('实例销毁之后调用');
    // }

}


</script>
<style lang="scss" scoped>
@import  '~@/styles/util/form.scss';

</style>

