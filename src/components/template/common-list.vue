<template>
  <div class="common-list">
    <router-link
      :to="{ path: '/hot'}"
      tag="div"
      class="list-item has-img"
      v-for="item in data"
      :key="item.id"
    >
      <img
        :src="item.post_thumbnail_image"
        alt=""
      >
      <div class="content-title">{{item.title.rendered}}</div>
      <div class="content-date">
        <div>
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>{{item.post_date}}</span>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'comment']" />
          <span>{{item.total_comments}}</span>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'eye']" />
          <span>{{item.pageviews}}</span>
        </div>
        <div>
          <font-awesome-icon :icon="['far', 'heart']" />
          <span>{{item.like_count}}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    data: Array
  }
};
</script>

<style lang="scss" scoped>
.common-list {
  .list-item {
    position: relative;
    border-bottom: 1px solid #eee;
    padding: 12px;
    min-height: 75px;
    overflow: hidden;
    &.has-img img {
      position: absolute;
      left: 0px;
      top: 12px;
      width: 100px;
      height: 75px;
      border-radius: 8px;
    }
    &.has-img .content-title {
      margin-left: 100px;
      height: 40px;
      margin-bottom: 10px;
    }
    &.has-img .content-date {
      color: #666;
      margin-left: 100px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      span {
        vertical-align: top;
      }
    }
  }
}
</style>
