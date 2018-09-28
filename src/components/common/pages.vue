<template>
    <div class="paginations">
        <button class="v-pages-np prev" v-if="showPrevMore" @click="currentPage-=1"></button>
        <ul class="v-pages" @click="changePage">
            <li :class="{ active : currentPage==1  }">1</li>
            <li class="ellipsis quickprev" v-if="efont">...</li>
            <li v-for="pager in pagers" :key="pager" :class="{ active : currentPage==pager  }">{{pager}}</li>
            <li class="ellipsis quicknext" v-if="currentPage<pageCount-3">...</li>
            <li :class="{ active : currentPage==pageCount  }">{{pageCount}}</li>
        </ul>
        <button class="v-pages-np next" v-if="showNextMore" @click="currentPage+=1"></button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      showPrevMore: false, //后退
      showNextMore: false, //前进
      currentPage: this.pageIndex, //当前页
      pageCount: Math.ceil(this.total / this.pageSizes) //总页数
    };
  },
  props: {
    total: {
      //总条数
      type: Number,
      default: ""
    },
    pageSizes: {
      //每页显示条数
      type: Number,
      default: ""
    },
    pagerCount: {
      //每组显示页数
      type: Number,
      default: 7
    },
    pageIndex:{
        type: Number,
      default: 1
    }
  },

  created() {},
  mounted() {},
  computed: {
    efont: function() {
      if (this.pageCount <= this.pagerCount) return false;
      return this.currentPage > 4;
    },
    pagers() {
      const pagerCount = Number(this.pagerCount)     //每组最多显示
      const currentPage = Number(this.currentPage)
      const pageCount = Number(this.pageCount)
      let showNextMore = false
      let showPrevMore = false
      if (pageCount > pagerCount) {
        if (currentPage > pagerCount - 3) {
          showPrevMore = true              
        }
        if (currentPage < pageCount - 3) {
          showNextMore = true
        }
      }

      const array = [];
      if (showPrevMore && !showNextMore) {            //只可后退（最后一组）
        const startPage = pageCount - (pagerCount - 2);
        for (let i = startPage; i < pageCount; i++) {
          array.push(i);
        }
      } else if (!showPrevMore && showNextMore) {       //只可前进 （第一组）
        for (let i = 2; i < pagerCount; i++) {
          array.push(i);
        }
      } else if (showPrevMore && showNextMore) {               //前进、后退可点击
        const offset = Math.floor(pagerCount / 2) - 1;
        for (let i = currentPage - offset; i <= currentPage + offset; i++) {
          array.push(i);
        }
      } else {
        for (let i = 2; i < pageCount; i++) {
          array.push(i);
        }
      }
      this.showPrevMore = showPrevMore;
      this.showNextMore = showNextMore;
      return array;
    }
  },
  methods: {
    changePage(event) {
      const target = event.target;
      const pageCount = this.pageCount;
      let newPage =  Number(target.innerText);
      const currentPage = this.currentPage;
      const total = this.total;
      if (target.tagName === "UL") {
        return;
      }
      if (target.className.indexOf("quickprev") !== -1) {            //后退省略号
        newPage = currentPage - 5;
      } else if (target.className.indexOf("quicknext") !== -1) {     //前进省略号
        newPage = currentPage + 5;
      } else {
        newPage = Number(target.innerText); //一般情况（数字）
      }
      if (newPage > pageCount) {
        newPage = pageCount;
      }
      if (newPage < 1) {
        newPage = 1;
      }
      this.currentPage = newPage;
      this.$emit("on-change", newPage);
    }
  }
};
</script>
<style lang="scss" scoped>
.paginations {
  &:after {
    display: block;
    clear: both;
    height: 0;
    content: "";
    visibility: hidden;
    overflow: hidden;
  }
  .v-pages-np {
    position: relative;
    float: left;
    list-style: none;
    border: 1px solid #39f;
    width: 26px;
    height: 26px;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    margin-right: 10px;
    color: #39f;
    border-radius: 3px;
    outline: none;
    box-sizing: content-box;
    padding: 0;
        background: #fff;
    cursor: pointer;
    &:after {
      content: "";
      display: table;
      width: 6px;
      height: 6px;
      position: absolute;
      border: 2px solid #39f;
      -webkit-transform: rotate(45deg) scale(1);
      transform: rotate(45deg) scale(1);
      -webkit-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
    &.prev {
      &:after {
        border-top: 0;
        border-right: 0;
        top: 10px;
        left: 10px;
      }
    }
    &.next {
      &:after {
        border-bottom: 0;
        border-left: 0;
        top: 10px;
        right: 10px;
      }
    }
  }
}
.v-pages {
     float: left;
    padding: 0;
    margin: 0;
  li {
    float: left;
    list-style: none;
    border: 1px solid #39f;
    width: 26px;
    height: 26px;
    line-height: 28px;
    font-size: 14px;
    text-align: center;
    margin-right: 10px;
    color: #39f;
    border-radius: 3px;
    cursor: pointer;
    &.active {
      background: #39f;
      color: #fff;
    }
  }
}
</style>


