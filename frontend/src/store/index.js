import Vue from 'vue';
import Vuex from 'vuex';
import HeroeService from '../services/heroe.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
  },
  actions: {
    async getHeroes({ commit }) {
      const heroes = await HeroeService.getAllHeroes();
      commit('allHeroes', heroes);
    },
  },
  mutations: {
    allHeroes(state, heroes) {
      state.heroes = heroes;
    },
  },
  modules: {},
});
