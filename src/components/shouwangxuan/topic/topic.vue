<template>
    <div>
        <div class="topic-common-list" >
            <div class="list-item" v-for="item in list" :key="item.id" >
                <img :src="item.category_thumbnail_image" alt="" :data-id="item.id">
                <h3 class="content-title" :data-id="item.id">{{item.name}}</h3>
                <p class="content-brief" :data-id="item.id">{{item.description}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
           const url = 'http://localhost:8000/api/categories';
           this.$ajax.get(url).then((res)=>{
               this.list = res.data
           },err =>{
               console.log(err)
           }).catch((error) => {
               console.log(error)
           })
        }
    }
  
}
</script>

<style lang="scss" scoped>
.topic-common-list  {
            padding: 15px 0px;
    margin: 0 15px;
}
.list-item{
width: 48%;
margin-right: 4%;
float: left;
&:nth-child(even){
    margin-right:0;
}
    img{
width: 100%;

        border-radius:12px;
        height:150px;

    }
    .content-title{
            padding: 6px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 20px;
    color: #1b1b1b;
    margin: 0;
    font-weight: normal;
    }
    .content-brief{
        padding:0 0  4px;
font-size:12px;
line-height:20px;
font-weight:400;
overflow:hidden;
text-overflow:ellipsis;
white-space:nowrap;
color:#959595;

    }

}
</style>

