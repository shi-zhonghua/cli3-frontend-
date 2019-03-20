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

// 自定义图标
import "./assets/iconfont/iconfont.css";
// 中英文国际化
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
const i18n = new VueI18n({
 // locale: getCookie('PLAY_LANG','zh'), // 语言标识
 locale:'zh',
 messages: {
  'zh': require('./i18n/lang/zh'),
  'en': require('./i18n/lang/en')
 }
})

// 词云插件
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
require('echarts-wordcloud')

Vue.config.productionTip = false



new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')