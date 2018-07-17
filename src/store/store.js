import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';
import {crimeListTrans} from './../transformers/crimeListTransformer.js';

Vue.use(Vuex);
const store = new Vuex.Store({
    state: {
        crimeList: [],
        primaryType: [],
        criminalListFields: [],
        caseDetails: {},
        isLoading: false
    },
    getters: {
        crimeList: state => state.crimeList,
        primaryType: state => state.primaryType,
        caseDetails: state => state.caseDetails,
        isLoading: state => state.isLoading
    },
    mutations: {
        setCrimeList(state, value) {
            const formatedList = crimeListTrans(value);
            state.crimeList = formatedList.data;
            state.criminalListFields = formatedList.fields;
        },
        setPrimaryTypeList(state, value) {
            state.primaryType = value
        },
        setCaseDetails(state, value) {
            state.caseDetails = value[0]
        },
        setLoader(state, value) {
            state.isLoading = value
        }
    },
    actions: {
        getCrimeData({commit}) {
            commit('setLoader', true);
            axios
                .get('http://localhost:3000')
                .then(response => {
                    commit('setCrimeList', response.data);
                    commit('setLoader', false);
                })
                .catch(e => {
                    console.log('error occured', e);
                    commit('setLoader', false);
                })
        },
        getPrimaryTypeList({commit}) {
            commit('setLoader', true);
            axios
                .get('http://localhost:3000/primaryTypes')
                .then(response => {
                    commit('setPrimaryTypeList', response.data);
                    commit('setLoader', false);
                })
                .catch(e => {
                    console.log('error occured', e);
                    commit('setLoader', false);
                })
        },
        getCrimeDataByType({commit}, primaryType) {
            commit('setLoader', true);
            axios
                .get(`http://localhost:3000/primaryTypes/${primaryType}`)
                .then(response => {
                    commit('setCrimeList', response.data);
                    commit('setLoader', false);
                })
                .catch(e => {
                    console.log('error occured', e);
                    commit('setLoader', false);
                })
        },
        getCrimeDataByCaseNumber({commit}, case_number) {
            commit('setLoader', true);
            axios
                .get(`http://localhost:3000/details/${case_number}`)
                .then(response => {
                    commit('setCaseDetails', response.data);
                    commit('setLoader', false);
                })
                .catch(e => {
                    console.log('error occured', e);
                    commit('setLoader', false);
                })
        }
    }
});

export default store;
