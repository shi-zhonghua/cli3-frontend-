<template>
    <div class="event-warp" id="halfContainerH">
        <div class="eventMenu">
            <ul>
                <li v-for="(item,index) in menus" :key="index" @click="changeAcitve(index)" class="d_jump" :class="{'active':activeIndex===index}">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <div class="event-content" id="content">
            <template v-for="(item,index) in menus" >
                <h2 :id="item.id">{{item.name}}</h2>
                <div v-if="index===0" class="event-div">事件溯源</div>
                <div v-if="index===1" class="event-div">平台信息走势</div>
                <div v-if="index===2" class="event-div">数据类型</div>
                <div v-if="index===3" class="event-div">关键词云</div>
                <div v-if="index===4" class="event-div">热门信息</div>
                <div v-if="index===5" class="event-div">热点文章情感走势</div>
                <div v-if="index===6" class="event-div">热词搜索</div>
            </template>
        </div>
    </div>
</template>
<script>
// import _ from "lodash";
export default {
  data() {
    return {
      activeIndex: 0,
      menus: [
        {
          name: "事件溯源",
          id: "eventSourcing"
        },
        {
          name: "平台信息走势",
          id: "informationTrend"
        },
        {
          name: "数据类型",
          id: "dataType"
        },
        {
          name: "关键词云",
          id: "keywordCloud"
        },
        {
          name: "热门信息",
          id: "hotNews"
        },
        {
          name: "热点文章情感走势",
          id: "newsTrend"
        },
        {
          name: "热词探索",
          id: "hotWordsExporation"
        }
      ]
    };
  },
  mounted() {
    // this.$nextTick(function() {
    //   window.addEventListener("scroll", this.onScroll);
    // });
  },
  methods: {
    changeAcitve(index) {
      this.activeIndex = index;
    },
    onScroll() {
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrolled)
    },
   
  }
};
</script>
<style lang="less" scoped>
.event-warp {
  position: relative;

  .eventMenu {
    position: fixed;
    left: 10px;
    top: 40%;

    ul {
      margin: 0;
      padding: 0 0 0 12px;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        width: 1px;
        background: #d8d8d8;
        left: 0;
      }
    }

    li {
      text-align: left;
      list-style: none;
      color: #999;
      cursor: pointer;
      margin-bottom: 15px;
      position: relative;
      line-height: 12px;
      height: 22px;
      font-size: 14px;

      &::before {
        position: absolute;
        content: "";
        top: 0;
        left: -17px;
        width: 11px;
        height: 11px;
        border-radius: 50%;
        background: #999;
      }

      &:hover {
        color: #666;
      }

      &:last-child {
        position: relative;

        &::after {
          position: absolute;
          content: "";
          width: 3px;
          height: 30px;
          background: #fff;
          bottom: -20px;
          left: -13px;
        }
      }

      &.active {
        color: #333;
        font-weight: bold;

        &::before {
          position: absolute;
          content: "";
          top: 0;
          left: -18px;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #333;
        }
      }
    }
  }

  .event-content {
    // background: #ccc;
    width: 90%;
    float: right;

    h2 {
      text-align: left;
      margin: 0;
      font-size: 16px;
    }

    .event-div {
      height: 300px;
      background: #ccc;
      width: 100%;
      margin-bottom: 20px;
      text-align: left;
    }
  }
}
</style>