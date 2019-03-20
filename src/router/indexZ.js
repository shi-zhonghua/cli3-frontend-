// import $ from '@/utils/jquery'
import createRouter from './createRouter'
import routes from './routes/index'
import store from '../vuex/store'


// 关键在这里，设置afterEach钩子函数
const afterEach = (to, from) => {

}
const beforEach = (to, from, next) => {

}

const router = createRouter(routes, {
    store,
    afterEach,
    beforEach
})

export default router