import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import {crimeListTrans} from './../transformers/crimeListTransformer.js';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        crimeList: [],
        primaryType: [],
        criminalListFields: []
    },
    getters: {
        crimeList: state => state.crimeList,
        primaryType: state => state.primaryType
    },
    mutations: {
        setCrimeList(state, value) {
            const formatedList = crimeListTrans(value);
            state.crimeList = formatedList.data;
            state.criminalListFields = formatedList.fields;
        },
        setPrimaryTypeList(state, value) {
            state.primaryType = value
        }
    },
    actions: {
        getCrimeData({commit}) {
            axios
                .get('http://localhost:3000')
                .then(response => {
                    commit('setCrimeList', response.data)
                })
                .catch(e => {
                    console.log('error occured', e)
                })
        },
        getPrimaryTypeList({commit}) {
            axios
                .get('http://localhost:3000/primaryTypes')
                .then(response => {
                    commit('setPrimaryTypeList', response.data)
                })
                .catch(e => {
                    console.log('error occured', e)
                })
        },
        getCrimeDataByType({commit}, primaryType) {
            axios
                .get(`http://localhost:3000/primaryTypes/${primaryType}`)
                .then(response => (console.log('response is', response.data)))
                .catch(e => {
                    console.log('error occured', e)
                })
        }
    }
});

export default store;
