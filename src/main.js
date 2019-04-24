import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './vuex/store'
// import getCookie './cookie.js'
/*引入资源请求插件*/
import VueResource from 'vue-resource'
Vue.use(VueResource)
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

// 词云插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('echarts-wordcloud')

// 全局过滤器
// import filters from './filter';
// Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

// 图片放大
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
Vue.use(preview)


Vue.config.productionTip = false



new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')