<template>
  <div class="container" >
    <Header
      :title="article.post_title"
      isBack
    ></Header>
    <div class="main-container">
      <article-content :article="article"></article-content>
      <!-- 评论区 -->
      <div class="commentArea mgt-20">
        <div class="part-title">
          <span>
            评论交流
          </span>
          (点击评论内容可以回复)
        </div>
        <p class="count">有{{commentSum}}条评论</p>
        <div class="comment-lists">
          <div v-if="commentSum==0" id="empty-tip">快来发表你的评论吧</div>
          <div
          v-else
            class="comment-item"
            v-for="(item,index) in article.comments_info"
            :key="index"
          >
            <div class="comment-author">
              <img
                :src="item.thumb"
                alt=""
              >
              <span>{{item.name}}</span>
              <span>{{item.time }}</span>
            </div>
            <div class="comment-text">
              <p @click="changecomer(item.name, index)">{{item.content}} </p>
              <div v-if="item.reply">
              <div class="reply" v-for="reply in item.reply" :key="reply.id">
                <p @click="changecomer(reply.responder, index)"><span>{{reply.responder}}</span>&nbsp;&nbsp;回复&nbsp;&nbsp;<span>{{reply.reviewers}}</span>&nbsp;&nbsp;{{reply.content}}</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 发表评论 -->
    <div class="commentBlock">
      <div
        class="gohome"
        @click="goHome"
      >
        <font-awesome-icon
          icon="home"
          class="icon"
        />
      </div>
      <div class="comment-input">
        <input
          type="text"
          ref="commentText"
          placeholder="评论..."
          v-model="commentText"
        >
        <button :class="{'disabled':disabled}" @click="postComment">发送</button>
      </div>
      <div class="emoji">
        <font-awesome-icon
          :icon="['far', 'meh-blank']"
          class="icon"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ArticleContent from "./articleContent"
import Header from "../../template/header";
import formatDate from "../../../utils/formatDate";
import { Toast,Indicator } from "mint-ui";

export default {
  filters: {
    formatDate(time) {
      var date = new Date(time);
      return formatDate(date, "yyyy-MM-dd");
    }
  },
  components: {
    Header,
    ArticleContent
  },
  data() {
    return {
      article: {},
      commentList: [],
      commentSum: "",    //文章评论总计
      id: "",
      disabled:true,
      commentText:"",   //评论内容
      type: 0,                //0为评论作者1为评论别人的评论2为评论别人的别人
		oldComment: null,    //被选中评论的name
		chosedIndex: -1,    //被选中评论的index
    };
  },
   watch: {
    $route: function(to, from) {
      const newId = to.query.id;
      const oldId = from.query.id;
      if(oldId){

        this.id = newId;
        this.fetchData();
      }
    },
    commentText(val,oldval){
     this.disabled= val ? false : true
    }
  },
  methods: {
    changecomer(name,index){
      console.log(name,index)
      this.oldComment = name;
			this.chosedIndex = index;
			this.type = 1;
          this.$refs.commentText.focus()
    },
    fetchData() {
      Indicator.close();
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      this.$axios
        .post("http://localhost:3000/post/detail", { id: this.$route.query.id })
        .then(res => {
          this.article = res.data.data;
          this.praiseSum = this.article.praise.length;
          this.commentSum = this.article.comments_info.length;
          this.sort(this.article.comments_info);
              Indicator.close();
        }).catch(error => {

        });
    },
    goHome() {
      this.$router.push({ path: "home" });
    },
    postComment() {
      let v = this.commentText;
      const params = {
        thumb: this.$store.getters.userInfo.avatorUrl,
        time: formatDate(new Date(), "yyyy-MM-dd"),
        name: this.$store.getters.userInfo.fullname,
        content: v,
        reply: []
      };
      if (v) {
        if(this.type==0){
          this.article.comments_info.unshift(params);
          this.commentSum++;
        }else if(this.type==1){
          this.article.comments_info[this.chosedIndex].reply.push({
					responder: this.$store.getters.userInfo.fullname,
					reviewers:this.oldComment,
          time: formatDate(new Date(), "yyyy-MM-dd"),
          content:v
				});
        this.type = 0;
        
        }
          this.commentText = "";
        // this.$axios
        //   .post("http://localhost:8000/api/article/postComment", params)
        //   .then(res => {
        //     console.log(res);
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      } else {
        Toast({
          message: "请填写评论后再发表",
          iconClass: "icon icon-error",
          position: "center"
        });
      }
    },
    sort(v) {
      this.article.comments_info = this.sortByKey(v, "time");
    },
    sortByKey(array, key) {
      return array.slice().sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    }
  },

  beforeCreate() {
    document.getElementsByTagName("body")[0].className = "bg-fff";
  },
  created() {
    this.$nextTick(function(){
      this.fetchData()
    })
  },
 
  mounted(){
  }
};
</script>


<style lang="scss" scoped>
.main-container {
  margin: 0 15px;
  padding: 40px 0 50px;
}
.mgt-20 {
  margin-top: 20px;
}
.content-article-detail {
  .entry-title {
    font-size: 16px;
    line-height: 1.6;
    font-weight: bold;
    outline: none;
    color: #3a4040;
    margin-bottom: 12px;
  }
  .entry-date {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
  }
  .entry-icon-text {
    margin-left: 5px;
    color: #959595;
  }
}
.count {
  color: #999;
  font-size: 14px;
  margin-bottom: 20px;
}
.part-title span {
  padding: 5px 0;
  display: inline-block;
  border-bottom: 2px solid #333;
  margin-bottom: 10px;
}
.article-text {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  text-indent: 2em;
  text-align: justify;
}
.relatedPost {
  ul {
    list-style: none;
    font-size: 14px;
    li {
      color: #666;
      line-height: 22px;
    }
  }
}
.pagination {
  color: #666;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  padding: 20px 0;
  overflow: auto;
  p {
    width: 70%;
  }
  :last-child {
    text-align: right;
    float: right;
    
  }
}
#empty-tip{
    text-align: center;
    line-height: 40px;
    color: #999;
  }
.commentBlock {
  height: 46px;
  background: #fff;
  border-top: 1px solid #eee;
  position: fixed;
  width: 100%;
  bottom: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  
  .icon {
    color: #666;
  }
  .gohome {
    padding: 10px;
  }
  .comment-input {
    border-radius: 4px;
    overflow: hidden;
    flex: 1;
    display: flex;
    height: 38px;
    input {
    font-size: 14px;
      background: #f4f8f7;
      border: 0;
      height: 100%;
      padding: 0 0 0 6px;
      outline: none;
      flex: 1;
    }
    button {
      border: 0;
      height: 100%;
      width: 70px;
      outline: none;
         background: #FF9800;
          color: #fff;
      &.disabled{
      background: #efefef;
      color: #999;
      }
    }
  }
  .emoji {
    padding: 10px;
  }
}
.comment-lists {
  .comment-item {
    background: #f4f8f7;
    padding: 6px 10px;
    border-radius: 4px;
    margin-bottom: 6px;
    .comment-text {
      p{
            font-size: 14px;
    color: #666;
    margin-left: 40px;
    text-indent: 2em;
    color: #999;

    margin-bottom: 6px;
        &:first-child{
  
    background: transparent;
    color: #666;
        }
        span{
    color: #666;
    font-weight: bold;
        }
      }
    }
    .comment-author {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 10px;
          font-size: 14px;
      img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        & + span {
          margin-left: 10px;
          font-weight: bold;
          color: #666;
        }
      }
      :last-child {
        margin-left: auto;
            color: #999;
      }
    }
  }
}
.praise-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
