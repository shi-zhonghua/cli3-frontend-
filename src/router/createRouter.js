import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes/index'
Vue.use(Router)

export default (routes) => {
    const router = new Router({
        mode: 'history',
        routes: routes
    })

    return router
}