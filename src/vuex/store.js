import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //菜单初始选中值
        activeIndex: '1'
    },
    mutations: {
        //改变菜单选中值
        changeActiveIndex(state, index) {
            state.activeIndex = index
        }
    },
    actions: {

    }
})