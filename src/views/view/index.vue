<template>
    <div class="index-box">
<nav>
            <h1>导航</h1>
            <!-- 所有的导航标题，进行路由跳转指向 -->
            <router-link :to="a.url" :key="index" v-for="(a,index) in Data">{{a.title}}</router-link>
        </nav>
        <div class="content">
            <!-- 路由插槽：路由跳转的位置 -->
            <router-view></router-view>
        </div>

    </div>
</template>
 
<script>
export default {
  name: "Index",
  data() {
    return {
      Data: [
        {
          title: "子页一",
          url: "/page1"
        },
        {
          title: "子页三",
          url: "/page2"
        }
      ]
    };
  }
};
</script>
 
<style scoped>
/* 容器 */
.index-box {
  width: 100%;
  height: 100%;
  background: #212224;
  display: flex;
}
/* 左侧导航条 */
nav {
  width: 260px;
  height: 100%;
  background: #323437;
  overflow: hidden;
  float: left;
}
/* 导航 */
nav h1 {
  color: #f2ffff;
  margin: 10px 0 10px 10px;
}
/* 导航标题 */
nav a {
  display: block;
  width: 100%;
  height: 45px;
  color: #f2ffff;
  background: #2e3033;
  padding-left: 10px;
  line-height: 45px;
  font-size: 20px;
  margin-bottom: 10px;
}
/* 右侧内容 */
.content {
  flex: 1;
  padding: 20px;
}
.router-link-active{
    color: #fff;
    background-color: red ;   
} 
</style>