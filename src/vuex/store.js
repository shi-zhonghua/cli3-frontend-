import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        LOADING: false,
        currentCity: '北京'
    },

    actions: {
        acitonsCity(context, city) {
            context.commit('mutationsCity', city)
        }
    },
    mutations: {
        showLoading(state) {
            state.LOADING = true
        },
        hideLoading(state) {
            state.LOADING = false
        },
        mutationsCity(state, city) {
            state.currentCity = city
        }
    },
    getters: {
        currentCity(state) {
            return state.currentCity
        }
    }

})