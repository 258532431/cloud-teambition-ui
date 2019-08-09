import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    //存储状态（变量）
    state: {
        //菜单初始选中值
        activeIndex: '1'
    },
    //修改状态，并且是同步的，在组件中使用$store.commit('',params)
    mutations: {
        //改变菜单选中值
        changeActiveIndex(state, index) {
            state.activeIndex = index
        }
    },
    //异步操作。在组件中使用是$store.dispath('')
    actions: {

    }
})