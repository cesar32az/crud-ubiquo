<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
    <v-snackbar
      v-model="snackbar.show"
      :timeout="2000"
      color="indigo accent-3"
      centered
      multi-line
      elevation="24"
    >
      <span class="text-h6">{{ snackbar.message }}</span>
      <template v-slot:action="{ attrs }">
        <v-btn dark text v-bind="attrs" @click="snackbar.show = false" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';

export default {
  components: { Header, Footer },
  name: 'App',

  data: () => ({}),
  computed: {
    ...mapState({
      snackbar: state => state.snackbar,
    }),
  },
  methods: {},
  mounted() {},
};
</script>
