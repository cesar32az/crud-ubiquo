<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <ListHeroes />
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn color="primary" dark absolute bottom right x-large fab @click="addHeroe">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <FormHeroe />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import FormHeroe from '../components/crud/FormHeroe.vue';
import ListHeroes from '../components/crud/ListHeroes.vue';

export default {
  name: 'CrudHeroes',
  components: { ListHeroes, FormHeroe },
  methods: {
    ...mapActions({
      addHeroe: 'openAddDialog',
    }),
  },
};
</script>

<style></style>
