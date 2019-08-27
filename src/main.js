import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
// 自定义全局组件
import loading from './common/vue-loading/index.js'

Vue.use(loading)
    /*引入资源请求插件*/
import VueResource from 'vue-resource'
Vue.use(VueResource)

// axios
import axios from 'axios'
axios.defaults.baseURL = '/api'
Vue.prototype.$axios = axios
    // element-ui 插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 公共样式
import './assets/less/common.less'
// 自定义图标
import "./assets/iconfont/iconfont.css";
// 中英文国际化
import i18n from './i18n/lang/index.js'
Vue.use(i18n)
    //复制文本
import clipboard from 'clipboard';
Vue.prototype.clipboard = clipboard;
// 词云插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('echarts-wordcloud')

// 全局过滤器
import filters from './filter'
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 日期过滤
import moment from 'moment'
Vue.filter('date', function(value, formatString) {
    formatString = formatString || 'YYYY-MM-DD';
    return moment(value).format(formatString);
})
Vue.filter('dateTime', function(value, formatString) {
        formatString = formatString || 'YYYY-MM-DD HH:mm';
        return moment(value).format(formatString);
    })
    // 全局骨架屏
import skeleton from 'vue-skeleton-component'
Vue.use(skeleton)
    // 图片放大
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)

// swiper 轮播
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(VueAwesomeSwiper)

// video 视频
import VideoPlayer from 'vue-video-player'
import 'video.js/dist/video-js.css'
Vue.use(VideoPlayer)

// 图片懒加载 
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
    preLoad: 1.3, // 预加载高度的比例
    error: require('@/assets/loading.gif'), //请求失败后显示的图片
    loading: require('@/assets/loading.gif'), //加载的loading过渡图片
    attempt: 1 // 加载图片数量
})

Vue.config.productionTip = false

// 请求之前拦截器
Vue.http.interceptors.push((request, next) => {　
    console.log(request)
    store.commit('showLoading', true)
    next((request) => {
        store.commit('showLoading', false)
        return request
    })
});

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')