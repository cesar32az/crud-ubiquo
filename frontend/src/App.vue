<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from './components/layout/Footer.vue';
import Header from './components/layout/Header.vue';
export default {
  components: { Header, Footer },
  name: 'App',

  data: () => ({
    //
  }),
  methods: {},
  mounted() {},
};
</script>
