import Vue from 'vue';
import Vuex from 'vuex';
import HeroeService from '../services/heroe.service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heroes: [],
    heroe: {
      name: '',
      eye_color: '',
      hair_color: '',
      skin_color: '',
      height: 0,
      weight: 0,
      race: '',
      publisher_id: null,
      gender_id: null,
      alignment_id: null,
    },
    dialog: false,
    dialogType: '', // add or edit
  },
  actions: {
    async getHeroes({ commit }) {
      const heroes = await HeroeService.getAllHeroes();
      console.log(heroes)
      commit('allHeroes', heroes);
    },
    async deleteHeroe({ commit }, heroe) {
      const message = await HeroeService.deleteHeroe(heroe._id);
      commit('deleteHeroe', heroe._id);
    },
    async createHeroe({ commit }, heroe) {
      const message = await HeroeService.createHeroe(heroe)
      commit('createHeroe', heroe);
    },
    async updateHeroe({ commit }, heroe) {
      const message = await HeroeService.updateHeroe(heroe)
      commit('updateHeroe', heroe);
    },
    openAddDialog({ commit }) {
      commit('addDialog');
    },
    openEditDialog({ commit }, heroe) {
      commit('editDialog', heroe);
    },
    closeDialog({ commit }) {
      commit('closeDialog');
    },
  },
  mutations: {
    allHeroes(state, heroes) {
      state.heroes = heroes;
    },
    deleteHeroe(state, id) {
      state.heroes = state.heroes.filter(heroe => heroe._id != id);
    },
    createHeroe(state, heroe) {
      state.heroes.push(heroe);
      state.dialog = false;
    },
    updateHeroe(state, updatedHeroe) {
      state.heroes = state.heroes.map(heroe => {
        if (heroe._id == updatedHeroe._id) return updatedHeroe;
        return heroe;
      });
      state.heroe = {}
      state.dialog = false;
      state.dialogType = '';
    },
    addDialog(state) {
      state.heroe = {}
      state.dialog = true;
      state.dialogType = 'add';
    },
    editDialog(state, heroe) {
      state.dialog = true;
      state.dialogType = 'edit';
      state.heroe = heroe
    },
    closeDialog(state) {
      state.dialog = false;
      state.dialogType = '';
    },
  },
  modules: {},
});
