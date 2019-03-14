<template>
    <div class="section">
        <div class="main" ref="validateForm">
            <p class="section-label">Form</p>
            <div class="form-group">
                <label for="">姓名:</label>
                <v-input v-model="validateForm.username" name="name" id="username" type="text" placeholder="First Name" />
            </div>
            <div class="form-group label-p-10">
                <label for="">上门取件:</label>
                <v-switch v-model="validateForm.switchValue" size="small" id="pickUp" name="pickUp" @change="onFormChange($event,'switchValue')" />
            </div>
            <div class="form-group label-p-10">
                <label for="">支付方式:</label>
                <v-select :selectValues="jobValue" :v-model="validateForm.payMethod" :style="{width:'200px'}" placeholder="请选择" clearable @change="onFormChange($event,'payMethod')"></v-select>
    
                <!-- <v-select v-model="validateForm.payMethod" placeholder="您的支付方式是" :values="jobValue" @change="onFormChange($event,'payMethod')"></v-select> -->
            </div>
            <div class="form-group label-p-10">
                <label for="">货物类型:</label>
                <v-checkbox-group v-model="validateForm.checkboxValue" @on-change="onFormChange($event,'checkboxValue')">
                    <v-checkbox v-for="(i,index) in tags" :key="index" :label="i.label" name="checkbox">{{i.text}}</v-checkbox>
                </v-checkbox-group>
            </div>
            <v-button type="primary" size="small" @click="handleSubmit()">提交</v-button>
            <v-button type="default" size="small">取消</v-button>
            <v-button type="default" size="small" @click="resetForm('validateForm')">重置</v-button>
            <span class="error" v-show="error" ref="error"></span>
        </div>
    </div>
</template>

<script>
    import {
        required,
        minLength,
        between
    } from "vuelidate/lib/validators"
    import VCheckboxGroup from "../../common/checkbox-group"
    import VCheckbox from "../../common/checkbox"
    import VButton from "../../common/button"
    import VSwitch from "../../common/switch"
    import VInput from "../../common/input"
    import VSelect from "../../common/select"
    
    export default {
        components: {
            VCheckboxGroup,
            VCheckbox,
            VButton,
            VSwitch,
            VInput,
            VSelect
        },
        data() {
            return {
                error: false,
                model1: "",
                jobValue: [{
                    value: 0,
                    label: "到付"
                }, {
                    value: 1,
                    label: "现付"
                }],
                validateForm: {
                    username: "",
                    payMethod: "",
                    checkboxValue: ["a"],
                    switchValue: false
                },
                tags: [{
                        label: "a",
                        text: "文件"
                    },
                    {
                        label: "b",
                        text: "食品"
                    },
                    {
                        label: "c",
                        text: "易碎品"
                    }
                ],
            };
        },
        validations: {
            username: {
                required,
                minLength: minLength(4)
            }
        },
        methods: {
            onFormChange(v, type) {
                this.validateForm[type] = v;
            },
            handleSubmit() {
                const formData = JSON.stringify(this.validateForm);
                if (!this.validateForm.username) {
                    this.error = true;
                    this.$refs.error.innerText = "姓名必填";
                } else if (!this.validateForm.payMethod) {
                    this.error = true;
                    this.$refs.error.innerText = "请选择支付方式";
                } else {
                    this.error = false;
                    this.$axios
                        .post("http://localhost:8000/api/customForm", formData)
                        .then(res => {
                            console.log(res);
                        })
                        .catch(err => {});
                }
            },
            resetForm(formName) {
                this.$data.validateForm = Object.assign({}, this.defaultData);
            },
        }
    }
</script>

<style lang="scss" scoped>
  
        .main {
            margin: 0 20px;
            .form-group {
                display: flex;
                align-items: center;
                &.label-p-10 {
                    padding: 10px 0;
                }
                label {
                    flex: 0 0 15%;
                }
            }
            .error {
                color: #f44336;
                font-size: 12px;
            }
        }
        .section-label {
            color: #657180;
            font-weight: bold;
            font-size: 18px;
            margin: 0 0 10px 0;
        }
        .label {
            display: block;
            background: #f3693d;
            color: #fff;
            margin-bottom: 10px;
            line-height: 40px;
            text-align: center;
        }
        .card-body {
            &:after {
                content: " ";
                display: block;
                height: 0;
                clear: both;
                visibility: hidden;
            }
            .v-card {
                margin-right: 20px;
                width: 300px;
                float: left;
            }
        }
</style>


