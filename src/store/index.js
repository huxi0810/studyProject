import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    submitData: 1
}

const getters = {
    getSubmitData: state => state.submitData
}

const mutations = {
    SETSUBMITDATA(state, number) {
        state.submitData = number
    }
}


export default new Vuex.Store({
    state,
    // actions,
    mutations,
    getters,
    modules: {}
})