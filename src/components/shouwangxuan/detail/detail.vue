<template>
  <div class="container">
    <Header
      :title="article.post_title"
      isBack
    ></Header>
    <div class="main-container">
      <div class="content-article-detail">
        <h1 class="entry-title">{{article.post_title}}</h1>
        <div class="entry-date">
          <span>
            <font-awesome-icon :icon="['far', 'clock']" />
            <span class="entry-icon-text">{{article.post_date}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'comment']" />
            <span class="entry-icon-text">{{article.total_comments}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'eye']" />
            <span class="entry-icon-text">{{article.pageviews}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'heart']" />
            <span class="entry-icon-text">{{article.like_count}}</span>
          </span>
        </div>
        <div class="article-text">
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
        </div>
      </div>
      <!-- 上一页 下一页 -->
      <div class="pagination">
        <router-link
          tag="p"
          :to="{ path: '/detail',query:{id:article.prev_page.id}}"
        >← {{article.prev_page.title}}</router-link>
        <router-link
          tag="p"
          :to="{ path: '/detail',query:{id:article.next_page.id}}"
        >{{article.next_page.title}} →</router-link>
      </div>
      <!-- 猜你喜欢 -->
      <div class="relatedPost mgt-20">
        <div class="part-title">
          <span>
            猜你喜欢
          </span>
        </div>
        <ul>
          <router-link
            :to="{}"
            tag="li"
          >1.山东省都发的搜救发搜房</router-link>
          <router-link
            :to="{}"
            tag="li"
          >2.山东省都发的搜救发搜房</router-link>
          <router-link
            :to="{}"
            tag="li"
          >3.山东省都发的搜救发搜房</router-link>
          <router-link
            :to="{}"
            tag="li"
          >4.山东省都发的搜救发搜房</router-link>
        </ul>
      </div>
      <!-- 点赞 -->
      <div class="praise mgt-20">
        <div class="part-title">
          <span>
            点赞
          </span>
        </div>
        <p class="count">有{{praiseSum}}评论人点赞</p>

        <div>
          <img
            v-for="item in article.praise"
            :key="item.id"
            :src="item.praise_user_thumb"
            class="praise-thumb"
            alt=""
          >
        </div>
      </div>
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
          <div
            class="comment-item"
            v-for="item in article.comments_info"
            :key="item.id"
          >
            <div class="comment-author">
              <img
                :src="item.comments_thumb"
                alt=""
              >
              <span>{{item.comments_username}}</span>
              <span>{{item.comments_date | formatDate}}</span>
            </div>
            <div class="comment-text">
              {{item.comments_text}}
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
          name=""
          ref="commentText"
          id=""
          placeholder="评论..."
        >
        <button @click="postComment">发送</button>
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
import Header from "../../common/header";
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
    Header
  },
  data() {
    return {
      article: {},
      commentList: [],
      praiseSum: "",
      commentSum: "",
      id: ""
    };
  },
  methods: {
    fetchData() {
      Indicator.close();
      Indicator.open({
        text: "Loading...",
        spinnerType: "fading-circle"
      });
      this.$ajax
        .post("http://localhost:8000/api/article/detail", { id: this.$route.query.id })
        .then(res => {
          console.log(res);
          this.article = res.data.data;
          this.praiseSum = this.article.praise.length;
          this.commentSum = this.article.comments_info.length;
          this.sort(this.article.comments_info);
              Indicator.close();
        }).catch(error => {

        });
  
    },
    goHome() {
      this.$router.push({ path: "navigation" });
    },
    postComment() {
      let v = this.$refs.commentText.value;
      const params = {
        comments_thumb: this.$store.getters.userInfo.avatar,
        comments_date: formatDate(new Date(), "yyyy-MM-dd"),
        comments_username: this.$store.getters.userInfo.username,
        comments_text: v
      };
      if (v) {
        this.article.comments_info.unshift(params);
        this.commentSum++;
        this.$refs.commentText.value = "";
        this.$ajax
          .post("http://localhost:8000/api/article/postComment", params)
          .then(res => {
            console.log(res);
          })
          .catch(error => {
            console.log(error);
          });
      } else {
        Toast({
          message: "请填写评论后再发表",
          iconClass: "icon icon-error",
          position: "center"
        });
      }
    },
    sort(v) {
      this.article.comments_info = this.sortByKey(v, "comments_date");
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
    // this.fetchData();
  },
  watch: {
    $route: function(to, from) {
      const newId = to.query.id;
      const oldId = from.query.id;
        this.id = newId;
        this.fetchData();
    }
  },
  mounted(){
    this.fetchData();
  }
  // beforeRouteUpdate(to, from, next) {
  //     const newId = to.query.id;
  //     const oldId = from.query.id;
  //     if(oldId){
  //       next();
  //       this.id=newId
  //       this.fetchData()
  //     }
  // }
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
.commentBlock {
  height: 40px;
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
    height: 32px;
    input {
      background: #f4f8f7;
      border: 0;
      height: 100%;
      padding: 0 0 0 6px;
      outline: none;
      flex: 1;
    }
    button {
      background: #efefef;
      border: 0;
      height: 100%;
      width: 70px;
      color: #999;
      outline: none;
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
      font-size: 14px;
      color: #666;
      text-indent: 2em;
    }
    .comment-author {
      display: flex;
      align-items: center;
      justify-content: left;
      margin-bottom: 10px;
      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        & + span {
          margin-left: 10px;
          font-weight: bold;
          color: #666;
        }
      }
      :last-child {
        margin-left: auto;
      }
    }
  }
}
.praise-thumb {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
