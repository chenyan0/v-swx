<template>
  <div class="common-list">
    <router-link
      :to="{ path: '/detail',query:{id:item.art_id}}"
      tag="div"
      class="list-item has-img"
      v-for="item in data"
      :key="item.id"
    >
      <img
        :src="utils.BASEURL +item.art_thumbnail_image"
        alt=""
      >
      <div class="content-title">{{item.art_title}}</div>
      <div class="content-date">
        <div>
          <font-awesome-icon :icon="['far', 'clock']" />
          <span>{{item.art_maker_time}}</span>
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
 import utils from '@/utils/config'
export default {
  data() {
    return {
      utils
    };
  },
  props: {
    data: Array
  },
  
};
</script>

<style lang="scss" scoped>
@import '../../styles/util/common';

.common-list {
  .list-item {
    position: relative;
    border-bottom: 1px solid #eee;
    padding: .75rem;
    min-height: 5rem;
    overflow: hidden;
    &.has-img img {
      position: absolute;
      left: 0px;
      top: .75rem;
      width:6.25rem;
      height: 4.6875rem;
      border-radius: .5rem;
    }
    &.has-img .content-title {
      margin-left: 6.25rem;
         height: 4rem;
    margin-bottom: .625rem;
      overflow:hidden; 
      text-overflow:ellipsis; 
      display:-webkit-box; 
      -webkit-box-orient:vertical;
      -webkit-line-clamp:2; 
      @include font-dpr(16px);
    }
    &.has-img .content-date {
      color: #666;
      margin-left: 6.25rem;
       @include font-dpr(12px);
      display: flex;
      justify-content: space-between;
      span {
        vertical-align: top;
      }
    }
  }
}
</style>
