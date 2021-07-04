<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <ListHeroes />
      </v-col>
    </v-row>
    <v-fab-transition>
      <v-btn color="primary" dark absolute bottom right x-large fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
  </v-container>
</template>

<script>
import ListHeroes from '../components/crud/ListHeroes.vue';
export default {
  name: 'CrudHeroes',
  components: { ListHeroes },
};
</script>

<style></style>
