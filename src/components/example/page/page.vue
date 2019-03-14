<template>
       <div class="section">
        <div class="main">
          <p class="section-label">Page Group</p>
          <v-page :total="82" :pageSizes="5" :pageIndex="curPage" :pagerCount="7" @on-change="onPageChange" />
        </div>
      </div>
</template>
<script>
  import VPage from "../../common/pages";

export default {
    components:{
        VPage
    },
    data(){
        return{
        curPage: 2,

        }
    },
    methods:{
         onPageChange(v) {
        this.curPage = v;
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

