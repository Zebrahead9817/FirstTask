import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios/index'

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        response: axios.get('https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11').then(value => value.data),
        InputValue: null,
        lolz: null,
        cin: null
    },
    mutations: {
        lolz: function (state, value) {
            state.lolz = value
        },
        cin: function (state, value) {
            state.cin = value
        },
        InputValue: function (state, value) {
            state.InputValue = value

        }

    }
})

