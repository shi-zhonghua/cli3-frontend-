<template>
    <div id="nav">
        <span>城市：{{currentCity}}</span>
        <router-link  :to="item.to" :key="index" v-for="(item,index) in navMenus">
             {{item.name}}
        </router-link> 
        
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {
            navMenus:[{
                name:'Home',
                to:'/'
            },{
                name:'百度地图',
                to:'/baiduMap'
            },{
                name:'词云',
                to:'/ciyun'
            },{
                name:'图表',
                to:'/echarts'
            },{
                name:'城市-三级联动',
                to:'/city'
            },{
                name:'城市散点分布',
                to:'/city2'
            },{
                name:'事件',
                to:'/event'
            },{
                name:'lodash',
                to:'/lodash'
            },{
                name:'卡片',
                to:'/card'
            },{
                name:'promise',
                to:'/promise'
            },{
                name:'图标',
                to:'/iconfont'
            },{
                name:'中英文',
                to:'/enzh'
            },{
                name:'下载',
                to:'/xiazai'
            },{
                name:'二维码',
                to:'/erweima'
            },{
                name:'flex布局',
                to:'/flex'
            },{
                name:'过滤器',
                to:'/filter'
            },{
                name:'图片放大',
                to:'/photo'
            },{
                name:'父子传值',
                to:'/emit'
            },{
                name:'树形结构',
                to:'/freeTreeMenu'
            },{
                name:'返回顶部',
                to:'/top'
            },{
                name:'过渡/动画',
                to:'/transition'
            },{
                name:'监测',
                to:'/watch'
            },{
                name:'数字跳动',
                to:'/number'
            },{
                name:'复制文本',
                to:'/copy'
            }]
        }

    },
    computed:{
        ...mapGetters(['currentCity'])
    }
}
</script>
<style lang="less">
#nav {
    span{
        float: left;
        margin-left: 20px;
    }
    padding: 20px ;
    box-sizing: border-box;
    width: 100%;
    background: #ccc;
    word-wrap: break-word;
    a {
        font-weight: bold;
        color: #2c3e50;
        margin-right:10px;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>