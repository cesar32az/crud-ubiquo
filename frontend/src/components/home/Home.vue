<template>
  <v-container>
    <v-row justify="center">
      <v-col class="d-flex justify-center" cols="12" md="10">
        <v-img max-height="20rem" max-width="20rem" :src="img"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="10">
        <h2 class="text-h2 font-weight-bold d-flex justify-center mb-10">
          Bienvenido
        </h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" md="6" class="d-flex justify-center">
        <v-btn large outlined color="primary" :to="{ name: 'Crud' }">
          <v-icon left>mdi-star-shooting-outline</v-icon>
          comenzar
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      img:
        "https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg",
    };
  },
};
</script>