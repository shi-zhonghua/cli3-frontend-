<template>
    <div>
        <div class="leftNav">
            <ul>
                <li v-for="(item,index) in navList" :key="index" @click="handle(index)" :class="{'active':currentIndex===index}">
                    {{item}}
                </li>
            </ul>
        </div>
        <div class="content">
            <div class="plan-box" id="0" ref="a">
                1
            </div>
            <div class="plan-box" id="1" ref="b">
                2
            </div>
            <div class="plan-box" id="2" ref="c">
                3
            </div>
            <div class="plan-box" id="3" ref="d">
                4
            </div>
        </div>

    </div>
</template>
<script>
export default {
  data() {
    return {
      currentIndex: 0,
      navList: ["首页", "技术", "论坛", "博客"]
    };
  },
  mounted() {
    window.addEventListener("scroll", this.getScrool);
  },
  methods: {
    handle(index) {
      this.currentIndex = index;
      var div = document.querySelector(`.plan-box:nth-child(${index + 1})`);
      document.documentElement.scrollTop = div.offsetTop;
      document.body.scrollTop = div.offsetTop;
    },
    getScrool() {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

      let oneHeight = this.$refs.a.offsetHeight;
      let twoHeight = this.$refs.b.offsetHeight + oneHeight;
      let threeHeight = this.$refs.c.offsetHeight + twoHeight;
      if (scrollTop > 0) {
        this.currentIndex = 0;
      }
      if (scrollTop > oneHeight - oneHeight / 2) {
        this.currentIndex = 1;
      }
      if (scrollTop > twoHeight - 50) {
        this.currentIndex = 2;
      }

      if (scrollTop > threeHeight - 100) {
        this.currentIndex = 3;
      }
    }
  },
  destroyed() {
    window.addEventListener("scroll", this.getScrool);
  }
};
</script>
<style lang="less" scoped>
div {
  // height: 1500px;
  // position: relative;
  .leftNav {
    position: fixed;
    top: 80px;
    left: 30px;
    width: 80px;
    li.active {
      color: #f0f;
    }
  }
  .plan-box {
    height: 300px;
    width: 800px;
    margin-left: 100px;
    background: #ccc;
    border-bottom: solid 1px #000;
  }
}
</style>



