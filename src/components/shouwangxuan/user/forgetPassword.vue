<template>
    <div>
        <Header isBack></Header>
        <div class="forget-form">
            <div class="top-block">
                <h2>找回密码</h2>
                <p>请输入新密码并验证手机号</p>
            </div>
            <div class="edit-info">
                <div class="form-group">
                    <input type="number" v-model="phone" placeholder="请输入手机号">
                </div>
                <div class="form-group">
                    <input type="email" v-model="code" placeholder="请输入手机验证码">
                    <button type="button" :disabled="disabled" @click="sendcode" class="btns">{{btntxt}}</button>
                </div>
                <div class="form-group">
                    <input :type="passVisible ? 'text' : 'password'" v-model="newpassword" placeholder="新密码（6-25位数字字母）">
                    <font-awesome-icon icon="eye" class="isVisible" v-if="!passVisible" @click="toggle" />
                    <font-awesome-icon icon="eye-slash" class="isVisible" v-if="passVisible" @click="toggle" />
                </div>
                
                <button>确定</button>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "../../template/header";
    import {Toast} from "mint-ui"
    export default {
        components: {
            Header
        },
        data() {
            return {
                disabled: false,
                time: 0,
                btntxt: "获取验证码",
                phone: "",
                newpassword: "",
                code: "",
                passVisible: false
    
            }
        },
        methods: {
            toggle() {
                this.passVisible = !this.passVisible
            },
            sendcode() {
                var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
                if (this.phone == '') {
                    Toast({
                        message: "请输入手机号码",
                        position: "top"
                    })
                } else if (!reg.test(this.phone)) {
                    Toast({
                        message: "手机格式不正确",
                        position: "top"
                    })
                } else {
                    this.time = 60;
                    this.disabled = true;
                    this.timer();
                    /*axios.post(url).then(
                        res=>{
                        this.phonedata=res.data;
                    })*/
                }
            },
            timer() {
                if (this.time > 0) {
                    this.time--;
                    this.btntxt = this.time + "s后重试";
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    this.btntxt = "获取验证码";
                    this.disabled = false;
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../../styles/base";
    $colors: #118fff #246FE2 //按钮
    #5f7c8b //wenzi
    ;
    .forget-form {
        padding-top: 40px;
    }
    
    .top-block {
        margin: 50px 30px 20px;
        h2 {
            margin: 0;
            color: #343434;
        }
        p {
            color: #b5b5b5;
        }
    }
    
    .edit-info {
        margin: 0 30px;
        &.private {
            margin: 0 30px 10px;
        }
        h1 {
            color: nth($list: $colors, $n:2);
            font-size: 14px;
            font-weight: normal;
        }
        .form-group {
            margin: 15px 0;
            height: 32px;
            line-height: 32px;
            color: #181a1d;
            display: flex;
            align-items: center;
            border-bottom: 1px solid rgba(0, 140, 255, 0.4);
            button {
                border: 1px solid rgba(0, 140, 255, 0.4);
                background: transparent;
                color: #5f7c8b;
                border-radius: 10px;
                width: 100px;
            }
            .isVisible{
               color: #5f7c8b;
            }
            &>input {
                border: 0;
                background-color: white;
                height: 30px;
                outline: none;
                font-size: 14px;
                flex: 1;
                color: nth($list: $colors, $n:3);
            }
        }
        >button {
            width: 100%;
            height: 40px;
            border-radius: 20px;
            background: nth($list: $colors, $n:2);
            border: 0;
            outline: none;
            font-size: 18px;
            color: white;
            display: block;
            margin: 30px 0 0;
        }
    }
</style>

