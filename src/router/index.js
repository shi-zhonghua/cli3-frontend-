import Vue from 'vue'
import Router from 'vue-router'
import store from '@/vuex/store.js'
// import Home from './views/Home.vue'

const layout = () => import( "@/components/layout.vue");
const home = () => import( "@/views/Home.vue");
const about = () => import( "@/views/About.vue");
const ciyun = () => import( "@/views/ciyun.vue");
const echarts = () => import( "@/views/echarts.vue");
const city = () => import( "@/views/city.vue");
const city2 = () => import(  "@/views/city2.vue");
const event = () => import( "@/views/event.vue");
const lodash = () => import(  "@/views/lodash.vue");
const card = () => import( "@/views/card.vue");
const promise = () => import( "@/views/promise.vue");
const enzh = () => import( "@/views/enzh.vue");
const iconfont = () => import(  "@/views/iconfont.vue");
const xiazai = () => import( "@/views/xiazai.vue");
const erweima = () => import(  "@/views/erweima.vue");
const flex = () => import( "@/views/flex.vue");
const filter = () => import( "@/views/filter.vue");
const photo = () => import( "@/views/photo.vue");


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
        },{
            path: '/xiazai',
            component: xiazai,
            meta: {
                title: '下载'
            }
        },{
            path: '/erweima',
            component: erweima,
            meta: {
                title: '二维码'
            }
        },{
            path: '/flex',
            component: flex,
            meta: {
                title: 'flex布局'
            }
        },{
            path: '/filter',
            component: filter,
            meta: {
                title: '过滤器'
            }
        },{
            path: '/photo',
            component: photo,
            meta: {
                title: '图片放大'
            }
        }]
    }
]

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
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