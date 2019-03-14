<template>
     <div class="section">
        <div class="main">
          <p class="section-label">Tree</p>
          <v-tree class="item" :model="tree" showIcon style="width:200px;display:inline-block"></v-tree>
          <v-tree class="item" :model="tree" show-checkbox style="width:200px;display:inline-block;    vertical-align: top;"></v-tree>
        </div>
      </div>
</template>
<script>
  import VTree from "../../common/tree";

export default {
    components: {
      VTree

    },
    data(){
        return{
            tree: {}
        }
    },
     created() {
      this.$axios.get("http://localhost:8000/api/getTree").then(res => {
        this.tree = res.data.data;
      });
    },    
}
</script>
<style lang="scss" scoped>
    
     
</style>

