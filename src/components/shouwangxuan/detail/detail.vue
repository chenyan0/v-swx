<template>
  <div class="container">
    <Header
      :title="data.post_title"
      isBack
    ></Header>
    <div class="main-container">
      <div class="content-article-detail">
        <h1 class="entry-title">{{data.post_title}}</h1>
        <div class="entry-date">
          <span>
            <font-awesome-icon :icon="['far', 'clock']" />
            <span class="entry-icon-text">{{data.post_date}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'comment']" />
            <span class="entry-icon-text">{{data.total_comments}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'eye']" />
            <span class="entry-icon-text">{{data.pageviews}}</span>
          </span>
          <span>
            <font-awesome-icon :icon="['far', 'heart']" />
            <span class="entry-icon-text">{{data.like_count}}</span>
          </span>
        </div>
        <div class="article-text">
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
          <p>一个免费的临时文件中转服务，FireFox出品，可以上传1G以内的文件(除体积外没有其它限制)，上传完成后将生成一个可供下载的加密链接，下载1次或上传24小时后该链接即失效。使用场景嘛，大家自己想象吧🤣~</p>
        </div>
      </div>
      <!-- 上一页 下一页 -->
      <div class="pagination">

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
      <!-- 评论区 -->
      <div class="commentArea mgt-20">
        <div class="part-title">
          <span>
            评论交流
          </span>
          (点击评论内容可以回复)
        </div>
      </div>
    </div>
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
          id=""
          placeholder="评论..."
        >
        <button>发送</button>
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
export default {
  components: {
    Header
  },
  data() {
    return {
      data: {},
      id: ""
    };
  },
  methods: {
    fetchData() {
      this.$ajax
        .post("http://localhost:8000/api/article/detail", { id: this.id })
        .then(res => {
          this.data = res.data.data;
        });
    },
    goHome() {
      this.$router.push({ path: "navigation" });
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: "fetchData"
  },
  beforeCreate() {
    this.id = this.$route.query.id;
    console.log(this.$route.query.id, this.id);
    document.getElementsByTagName("body")[0].className = "bg-fff";
  },
  created() {
    this.fetchData();
  }
};
</script>


<style lang="scss" scoped>
.main-container {
  margin: 0 15px;
  padding: 40px 0;
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
.part-title span {
  padding: 2px 0;
  display: inline-block;
  border-bottom: 2px solid #333;
  margin-bottom: 10px;
}
.article-text {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  text-indent: 2em;
}
.relatedPost {
  color: #444;
  ul {
    list-style: none;
    font-size: 14px;
    li {
      line-height: 22px;
    }
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
    }
  }
  .emoji {
    padding: 10px;
  }
}
</style>
