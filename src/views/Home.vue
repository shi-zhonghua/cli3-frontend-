<template>
    <div class="home">
        <!-- 骨架屏 -->
        <skeleton class='skeleton' v-if="isSkeleton" type='listcom' active :options="{
    row: 3,
    lineHight: 20
}">

        </skeleton>
        <div id="loginDiv" tabindex="1" style="outline:0;">
            <input type="text" v-focus style="opacity:0;position:absolute;">
        </div>
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        <div v-for="item in yearArr" :key="item">{{item}}</div>
        {{yearArr}}<br />
        <el-button type="primary" class="sub-btn" @click="cur">获取return键</el-button>
        <router-link to="/About">About</router-link>

        <loading>
            <span slot="message">全局封装组件--暂无优惠券</span>
        </loading>

    </div>
</template>
<script>
import HelloWorld from "@/components/HelloWorld.vue";
import { sessionStorageApi, localStorageApi } from "@/utils/storageApi.js";

// 添加引导步骤

import Driver from "driver.js"; // import driver.js
import "driver.js/dist/driver.min.css"; // import driver.js css
import steps from "./guide";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  directives: {
    focus: {
      // 指令的定义
      inserted: function(el) {
        el.focus();
      }
    }
  },
  //  从另外的组件进入该组件前触发该钩子
  beforeRouteEnter(to, from, next) {
    console.log("todo before enter");
    console.log(this); // 这里获取不到上下文
    next(vm => {
      // next里面有一个回到函数可以获取到上下文，把请求到的数据塞到vue对象中
    //   console.log(vm);
     
    });
  },
  //  同一个组件，param不同的是触发,常用与同一个组件当传入不通参数时，展示不同的数据
  beforeRouteUpdate(to, from, next) {
    console.log("todo update enter");
    next();
  },
  //  该组件离开跳转到另外的组件时触发该钩子,常应用于用户表单，当用户填了一部分内容，需要提醒用户是否离开页面
  beforeRouteLeave(to, from, next) {
    console.log("todo leave enter");
    if (global.confirm("are you sure")) {
      next();
    }
  },
  data() {
    return {
      yearArr: [],
      driver: null,
      isSkeleton: true
    };
  },
  created() {
    document.onkeypress = e => {
      let that = this;
      var keycode = document.all ? event.keyCode : e.which;
      if (keycode === 13) {
        if (sessionStorageApi.get("token")) {
          return;
        }
        that.cur();
        return false;
      }
    };
  },
  mounted() {
    setTimeout(() => {
      this.isSkeleton = false;
    }, 50);
    this.getYear();
    this.random();
    this.driver = new Driver({
      className: "scoped-class", // className to wrap driver.js popover
      animate: true, // Animate while changing highlighted element
      opacity: 0.75, // Background opacity (0 means only popovers and without overlay)
      padding: 10, // Distance of element from around the edges
      allowClose: true, // Whether clicking on overlay should close or not
      overlayClickNext: false, // Should it move to next step on overlay click
      doneBtnText: "完成", // Text on the final button
      closeBtnText: "关闭", // Text on the close button for this step
      nextBtnText: "下一步", // Next button text for this step
      prevBtnText: "上一步" // Previous button text for this step
      // Called when moving to next step on any step
    });
    if (!localStorageApi.get("firstLogin")) {
      this.guide();
      localStorageApi.set("firstLogin", "ture");
    }
  },

  methods: {
    random() {
      let token = [];
      for (let i = 0; i < 10; i++) {
        token.push(Math.ceil(Math.random() * 10) * i);
      }
      let tokens = token.join("");
      sessionStorageApi.set("token", tokens);
    },
    getYear() {
      var date = new Date();
      var currentYear = date.getFullYear();
      this.yearArr.push(currentYear);
      var onYear = currentYear - 1;
      this.yearArr.push(onYear);
    },
    cur() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning"
      });
    },
    //引导步骤
    guide() {
      this.driver.defineSteps(steps);
      this.driver.start();
    }
  }
};
</script>
<style lang="less" scoped>
.skeleton {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  // width:100%;
  // height: 100%;
  background: #ccc;
  z-index: 333;
}
</style>