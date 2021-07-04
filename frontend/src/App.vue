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
import Footer from "./components/layout/Footer.vue";
import Header from "./components/layout/Header.vue";
import axios from 'axios'
export default {
  components: { Header, Footer },
  name: "App",

  data: () => ({
    //
  }),
  methods: {
    async getData(){
      const response = await axios.get('http://localhost:4000/api/alignment')
      console.log(response)
    }
  },
  mounted() {
    this.getData()
  }
};
</script>
