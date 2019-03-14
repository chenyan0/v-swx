<template>
  <div
    class="page-loadmore-wrapper"
    ref="wrapper"
    :style="{ height: wrapperHeight + 'px' }"
  >

    <mt-loadmore
      :auto-fill="false"
      :top-method="loadTop"
      :bottom-method="loadBottom"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
      @bottom-status-change="handleBottomChange"
    >
      <div class="topic-common-list">
        <router-link
          :to="{ name: 'list', params: { id:item.id, name:item.name, desc:item.description }}"
          tag="div"
          class="list-item"
          v-for="item in list"
          :key="item.id"
        >
          <img
            :src="item.category_thumbnail_image"
            alt=""
            :data-id="item.id"
          >
          <h3
            class="content-title"
            :data-id="item.id"
          >{{item.name}} <span
              @click="handleOrder"
              :class="item.order_status ? 'ordered' : '' "
            >{{item.order_status ? '已订阅' : '未订阅' }}</span></h3>
          <p
            class="content-brief"
            :data-id="item.id"
          >{{item.description}}</p>
        </router-link>
      </div>
    </mt-loadmore>

    <copyright />
  </div>

</template>
<script>
import Copyright from "../../template/copyright";
import { Loadmore } from "mint-ui";
export default {
  components: {
    Copyright
  },
  data() {
    return {
      list: [],
      bottomStatus: "",
      allLoaded: false,
      pageNum: 1,
      wrapperHeight: 0
    };
  },
  created() {
    this.fetchData(this.pageNum);
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  },
  methods: {
    loadBottom(id) {
      setTimeout(() => {
        this.pageNum++;
        this.fetchData(this.pageNum);
        if (this.pageNum >= 4) {
          this.allLoaded = true; // 若数据已全部获取完毕
        }
        this.$refs.loadmore.onBottomLoaded(id);
      }, 1500);
    },
    loadTop(id) {
      this.$refs.loadmore.onTopLoaded(id);
    },
    fetchData(page) {
      const url = "http://localhost:8000/api/categories";
      this.$axios
        .post(url, { pager: this.page })
        .then(
          res => {
            if (res.status == 200) {
              let list = res.data.data;
              list.map(n => this.list.push(n));
            }
          },
          err => {
            console.log(err);
          }
        )
        .catch(error => {
          console.log(error);
        });
    },
    handleOrder($event) {
      console.log($event.target);
    },
    handleBottomChange(status) {
      this.bottomStatus = status;
    }
  }
};
</script>

<style lang="scss" scoped>
.page-loadmore-wrapper {
  overflow: scroll;
}
.topic-common-list {
  padding: 15px 0px;
  margin: 0 15px;
  overflow: auto;
}
.list-item {
  width: 48%;
  margin-right: 4%;
  float: left;
  &:nth-child(even) {
    margin-right: 0;
  }
  img {
    width: 100%;

    border-radius: 12px;
    height: 150px;
  }
  .content-title {
    padding: 6px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 16px;
    line-height: 20px;
    color: #1b1b1b;
    margin: 0;
    font-weight: normal;
    span {
      border: 1px solid #99b1ce;
      color: #99b1ce;
      padding: 0 6px;
      font-size: 12px;
      float: right;
      border-radius: 4px;
      &.ordered {
        color: #fff;
        background: #99b1ce;
      }
    }
  }
  .content-brief {
    padding: 0 0 4px;
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #959595;
  }
}
</style>

