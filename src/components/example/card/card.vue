<template>
      <div class="section">
        <div class="main">
          <p class="section-label">Card Group</p>
          <div class="card-body">
            <v-card>
              <div slot="title">卡片名称</div>
              <p>文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。一个文本可以是一个句子（Sentence）、一个 ...</p>
            </v-card>
            <v-card option>
              <img src="http://placeimg.com/300/200" alt="" slot="img">
              <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type.</p>
            </v-card>
          </div>
        </div>
      </div>
</template>
<script>
import VCard from "../../common/card";
export default {
    components:{
        VCard
    },
    data(){
return{
    
}
    }
}
</script>
<style lang="scss" scoped>
@import './card'
</style>


