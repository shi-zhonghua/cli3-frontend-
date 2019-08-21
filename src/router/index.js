import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store.js'
// import Home from './views/Home.vue'

const layout = () =>
    import ("@/components/layout.vue");
const home = () =>
    import ("@/views/Home.vue");
const about = () =>
    import ("@/views/About.vue");
const ciyun = () =>
    import ("@/views/ciyun.vue");
const echarts = () =>
    import ("@/views/echarts.vue");
const city = () =>
    import ("@/views/city.vue");
const city2 = () =>
    import ("@/views/city2.vue");
const event = () =>
    import ("@/views/event.vue");
const lodash = () =>
    import ("@/views/lodash.vue");
const card = () =>
    import ("@/views/card.vue");
const promise = () =>
    import ("@/views/promise.vue");
const enzh = () =>
    import ("@/views/enzh.vue");
const iconfont = () =>
    import ("@/views/iconfont.vue");
const xiazai = () =>
    import ("@/views/xiazai.vue");
const erweima = () =>
    import ("@/views/erweima.vue");
const flex = () =>
    import ("@/views/flex.vue");
const filter = () =>
    import ("@/views/filter.vue");
const photo = () =>
    import ("@/views/photo.vue");
const emit = () =>
    import ("@/views/emit.vue");
const freeTreeMenu = () =>
    import ("@/views/freeTreeMenu.vue");
const top = () =>
    import ("@/views/top.vue");
const baiduMap = () =>
    import ("@/views/baiduMap.vue");
const transition = () =>
    import ("@/views/transition.vue");
const watch = () =>
    import ("@/views/watch.vue");
const fenye = () =>
    import ("@/views/fenye.vue");
const number = () =>
    import ("@/views/number.vue");
const webMap = () =>
    import ("@/views/webMap.vue");
const copy = () =>
    import ("@/views/copy.vue");
const mapApp = () =>
    import ("@/views/webMap.vue");
const swiper = () =>
    import ("@/views/swiper.vue");
const video = () =>
    import ("@/views/video.vue");
const waterfallEasy = () =>
    import ("@/views/waterfallEasy.vue");
const lazy = () =>
    import ("@/views/lazy.vue");
const axiosGet = () =>
    import ("@/views/axios/get.vue");
const audio = () =>
    import ("@/views/audio/index.vue");
const mounted = () =>
    import ("@/views/mounted.vue");
const infiniteScroll = () =>
    import ("@/views/infiniteScroll.vue");
const regula = () =>
    import ("@/views/regula.vue");

Vue.use(Router)

const routes = [
        // {
        //     path: '/',
        //     name: 'home',
        //     component: Home
        // },
        // {
        //     path: '/about',
        //     name: 'about',
        //     // route level code-splitting
        //     // this generates a separate chunk (about.[hash].js) for this route
        //     // which is lazy-loaded when the route is visited.
        //     component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
        // }
        {
            path: '/',
            component: layout,
            redirect: home,
            children: [{
                path: '/',
                component: home,
                meta: {
                    title: 'home'
                }
            }, {
                path: '/baiduMap',
                component: baiduMap,
                meta: {
                    title: '百度地图'
                }
            }, {
                path: '/about',
                component: about,
                meta: {
                    title: 'about'
                }
            }, {
                path: '/ciyun',
                component: ciyun,
                meta: {
                    title: 'ciyun'
                }
            }, {
                path: '/echarts',
                component: echarts,
                meta: {
                    title: 'echarts'
                }
            }, {
                path: '/city',
                component: city,
                meta: {
                    title: 'city'
                }
            }, {
                path: '/city2',
                component: city2,
                meta: {
                    title: 'city2'
                }
            }, {
                path: '/event',
                component: event,
                meta: {
                    title: 'event'
                }
            }, {
                path: '/lodash',
                component: lodash,
                meta: {
                    title: 'lodash'
                }
            }, {
                path: '/card',
                component: card,
                meta: {
                    title: 'card'
                }
            }, {
                path: '/promise',
                component: promise,
                meta: {
                    title: 'promise'
                }
            }, {
                path: '/iconfont',
                component: iconfont,
                meta: {
                    title: 'iconfont'
                }
            }, {
                path: '/enzh',
                component: enzh,
                meta: {
                    title: '中英文'
                }
            }, {
                path: '/xiazai',
                component: xiazai,
                meta: {
                    title: '下载'
                }
            }, {
                path: '/erweima',
                component: erweima,
                meta: {
                    title: '二维码'
                }
            }, {
                path: '/flex',
                component: flex,
                meta: {
                    title: 'flex布局'
                }
            }, {
                path: '/filter',
                component: filter,
                meta: {
                    title: '过滤器'
                }
            }, {
                path: '/photo',
                component: photo,
                meta: {
                    title: '图片放大'
                }
            }, {
                path: '/emit',
                component: emit,
                meta: {
                    title: '父与子传值'
                }
            }, {
                path: '/freeTreeMenu',
                component: freeTreeMenu,
                meta: {
                    title: '树形结构'
                }
            }, {
                path: '/top',
                component: top,
                meta: {
                    title: '返回顶部'
                }
            }, {
                path: '/transition',
                component: transition,
                meta: {
                    title: '过渡/动画'
                }
            }, {
                path: '/watch',
                component: watch,
                meta: {
                    title: '监测'
                }
            }, {
                path: '/fenye',
                component: fenye,
                meta: {
                    title: ''
                }
            }, {
                path: '/number',
                component: number,
                meta: {
                    title: ''
                }
            }, {
                path: '/webMap',
                component: webMap,
                meta: {
                    title: '地图导航'
                }
            }, {
                path: '/copy',
                component: copy,
                meta: {
                    title: '复制文本'
                }
            }, {
                path: '/mapApp',
                component: mapApp,
                meta: {
                    title: '导航'
                }
            }, {
                path: '/swiper',
                component: swiper,
                meta: {
                    title: '轮播'
                }
            }, {
                path: '/video',
                component: video,
                meta: {
                    title: '视频'
                }
            }, {
                path: '/waterfallEasy',
                component: waterfallEasy,
                meta: {
                    title: '瀑布流'
                }
            }, {
                path: '/lazy',
                component: lazy,
                meta: {
                    title: '图片懒加载'
                }
            }, {
                path: '/axiosGet',
                component: axiosGet,
                meta: {
                    title: 'axios'
                }
            }, {
                path: '/audio',
                component: audio,
                meta: {
                    title: '音频-录音'
                }
            }, {
                path: '/mounted',
                component: mounted,
                meta: {
                    title: '生命周期'
                }
            }, {
                path: '/infiniteScroll',
                component: infiniteScroll,
                meta: {
                    title: '滚动加载'
                }
            }, {
                path: '/regula',
                component: regula,
                meta: {
                    title: '正则'
                }
            }],

        }
    ]
    // 滚动条位置设置
const scrollBehavior = function(to, from, savedPosition) {
    // savedPosition 会在你使用浏览器前进或后退按钮时候生效
    // 这个跟你使用 router.go() 或 router.back() 效果一致
    // 这也是为什么我在 tab 栏结构中放入了一个 点击回退 的按钮
    if (savedPosition) {
        return savedPosition
    } else {
        // 如果不是通过上述行为切换组件，就会让页面回到顶部
        return { x: 0, y: 0 }
    }
}
const router = new Router({
        mode: 'history',
        base: process.env.BASE_URL,
        routes,
        scrollBehavior
    })
    // 路由跳转前的钩子
router.beforeEach(function(to, from, next) {
        // this.$store.commit('showLoading', { LOADING: true })
        next()

    })
    // 路由跳转后的钩子
router.afterEach((to, from) => {
    window.document.title = to.meta.title
        // this.$store.commit('hideLoading', { LOADING: false })
})


export default router