<template>
		<div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>|
            <router-link to="/ciyun">ciyun</router-link>|
            <router-link to="/echarts">echarts</router-link>|
            <router-link to="/city">城市分布-三级联动</router-link>|
            <router-link to="/city2">城市分布散点图</router-link>|
            <router-link to="/event">event</router-link>|
            <router-link to="/lodash">lodash</router-link>|
            <router-link to="/card">card</router-link>|
            <router-link to="/promise">promise</router-link>|
            <router-link to="/iconfont">iconfont</router-link>|
            <router-link to="/enzh">中英文</router-link>|
            <router-link to="/xiazai">下载</router-link>|
            <router-link to="/erweima">二维码</router-link>|
            <router-link to="/flex">flex布局</router-link>|
            <router-link to="/filter">过滤器</router-link>|
            <router-link to="/photo">图片放大</router-link>
        </div>
</template>
<style lang="less">
#nav {
    padding: 20px 0;
    width:100%;
    background: #ccc;
   
    

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>