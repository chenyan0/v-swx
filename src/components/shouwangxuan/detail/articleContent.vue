<template>
<div>

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
        <div class="article-text" v-html="article.post_content">
        </div>
    </div>
    <!-- 上一页 下一页 -->
    <div class="pagination">
        <router-link tag="p" v-if="article.prev_page" :to="{ path: '/detail',query:{id:article.prev_page.id ? article.prev_page.id : 1 }}">← {{article.prev_page.title}}</router-link>
        <router-link tag="p" v-if="article.next_page" :to="{ path: '/detail',query:{id:article.next_page.id ? article.next_page.id : 1}}">{{article.next_page.title}} →</router-link>
    </div>
    <!-- 猜你喜欢 -->
    <div class="relatedPost mgt-20">
        <div class="part-title">
            <span>
                猜你喜欢
              </span>
        </div>
        <ul>
            <router-link :to="{}" tag="li">1.山东省都发的搜救发搜房</router-link>
            <router-link :to="{}" tag="li">2.山东省都发的搜救发搜房</router-link>
            <router-link :to="{}" tag="li">3.山东省都发的搜救发搜房</router-link>
            <router-link :to="{}" tag="li">4.山东省都发的搜救发搜房</router-link>
        </ul>
    </div>
    <!-- 点赞 -->
    <div class="praise mgt-20">
        <div class="part-title">
            <span>
                点赞
              </span>
        </div>
        <p class="count" v-if="article.praise!==undefined&&article.praise.length>0 ? 1 :0" >有{{article.praise.length}}评论人点赞</p>
        <div v-if="article.praise">
            <img v-for="item in article.praise" :key="item.id" :src="item.praise_user_thumb" class="praise-thumb" alt="">
        </div>
    </div>
</div>

</template>
<script>
export default {
    props:{
        article:{}
    },
    data(){
        return {
        }
    }
}
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
    font-size: 20px;
    line-height: 1.6;
    font-weight: bold;
    outline: none;
    color: #3a4040;
    margin-bottom: 12px;
  }
  .entry-date {
    font-size: 14px;
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
  font-size: 16px;
  margin-bottom: 20px;
}
.part-title span {
  padding: 5px 0;
  display: inline-block;
  border-bottom: 2px solid #333;
  margin-bottom: 10px;
      font-size: 18px;
}
.article-text {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  text-align: justify;
}
.relatedPost {
  ul {
    list-style: none;
    font-size: 16px;
    li {
      color: #666;
      line-height: 22px;
    }
  }
}
.pagination {
  color: #666;
  font-size: 16px;
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
.praise-thumb {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 5px;
}
</style>
