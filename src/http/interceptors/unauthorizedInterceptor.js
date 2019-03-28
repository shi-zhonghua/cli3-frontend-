import Vue from 'vue/dist/vue.runtime.esm'
import store from '../../vuex/store'
import { isRequireAuthentication } from '../util'

// 弹出登录对话框，让用户重新登录
const login = () => {
  return new Promise((resolve, reject) => {
    const loginDialog = store.getters.loginDialog
    loginDialog.login().then(() => {
      // 登录成功后重新获取下当前用户
      store
        .dispatch('getLoggedUser')
        .then(() => resolve())
        .catch(error => reject(new Error(`Get logged user failed: ${error}.`)))
    })
  })
}

// 处理401响应的拦截器
export default request => {
  return response => {
    if (isRequireAuthentication(response)) {
      // @see https://github.com/pagekit/vue-resource/issues/605
      // @see https://laracasts.com/discuss/channels/vue/jwt-auth-with-vue-resource-interceptor?page=1
      // 如果请求401，说明每户没有登录（或者登录Session已经失效），这个时候弹出登录对话框，
      // 用户登录后重新发送失败的请求
      store.dispatch('setServerLoading', false)
      return login()
        .then(() => Vue.http(request))
        .catch(() => response)
    }
  }
}
