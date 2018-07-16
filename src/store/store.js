import Vuex from 'vuex';
import Vue from 'vue';
import axios from 'axios';

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    getCrimeData({ commit }) {
      axios
        .get('http://localhost:3000/OFFENSE INVOLVING CHILDREN')
        .then(response => (console.log('response is',response.data)))
        .catch(e => {
          console.log('error occured', e)
        })
    }
  }
});

export default store;
