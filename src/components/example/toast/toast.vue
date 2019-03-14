
<template>
    <div class="section">
        <div class="main">
            <p class="section-label">Toast</p>
            <v-button type="primary" size="small" @click="showToast">点击弹出Toast</v-button>
            <v-button type="primary" size="small" @click="showIconToast">点击弹出有Icon的Toast</v-button>
            <v-button type="primary" size="small" @click="showPosToast">自定义Toast位置</v-button>
        </div>
    </div>
</template>

<script>
    import VButton from "../../common/button"
    
    export default {
        components: {
            VButton
        },
        methods: {
            showToast() {
                this.$vtoast("我是弹出消息");
            },
            showIconToast() {
                this.$vtoast({
                    text: "我是有图标的",
                    duration: "2000",
                    icon: "user"
                });
            },
            showPosToast() {
                this.$vtoast({
                    text: "我的位置是自定义的",
                    position: "top"
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
  
        .main {
            margin: 0 20px;
        }
        .section-label {
            color: #657180;
            font-weight: bold;
            font-size: 18px;
            margin: 0 0 10px 0;
    }
</style>


