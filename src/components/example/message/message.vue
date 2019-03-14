
<template>
      <div class="section">
        <div class="main">
          <p class="section-label">Message 全局提示</p>
          <v-button type="primary" size="small" @click="showMessage">显示普通消息</v-button>
          <v-button type="primary" size="small" @click="showSuccessMessage">显示成功消息</v-button>
          <v-button type="primary" size="small" @click="showErrorMessage">显示错误消息</v-button>
          <v-button type="primary" size="small" @click="showWarnMessage">显示警告消息</v-button>
          <v-button type="primary" size="small" @click="showLoadingMessage">显示加载中...</v-button>
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
            showMessage() {
        this.$vmessage.info({
          text: "这是一条普通消息"
        });
      },
      showSuccessMessage() {
        this.$vmessage.success({
          text: "这是一条成功消息"
        });
      },
      showErrorMessage() {
        this.$vmessage.error({
          text: "对方不想说话，并且向你抛出了一个异常"
        });
      },
      showWarnMessage() {
        this.$vmessage.warning({
          text: "这是一条警告消息"
        });
      },
      showLoadingMessage() {
        this.$vmessage.loading({
          text: "正在加载中",
          duration: 1000000000
        });
      }
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


