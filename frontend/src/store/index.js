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
    async deleteHeroe({ commit }, heroe) {
      const message = await HeroeService.deleteHeroe(heroe._id);
      commit('deleteHeroe', heroe._id);
    },
  },
  mutations: {
    allHeroes(state, heroes) {
      state.heroes = heroes;
    },
    deleteHeroe(state, id) {
      state.heroes = state.heroes.filter(heroe => heroe._id != id);
    },
  },
  modules: {},
});
