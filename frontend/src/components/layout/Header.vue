<template>
  <v-container>
    <!-- APP BAR -->
    <v-app-bar
      dark
      app
      color="#6A76AB"
      shrink-on-scroll
      src="https://picsum.photos/1920/1080?random"
      prominent
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right,rgba(25,32,72,.7), rgba(100,115,201,.5)  "
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Prueba Técnica: Parte II</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon large>
          {{ $vuetify.theme.dark ? 'mdi-moon-waxing-crescent' : 'mdi-white-balance-sunny' }}
        </v-icon>
      </v-btn>
    </v-app-bar>
    <!-- DRAWER -->
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav>
        <v-list-item-group active-class="primary--text text--accent-4">
          <!-- HOME -->

          <v-list-item link :to="{ name: 'Home' }" exact>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <!-- CRUD -->

          <v-list-item link :to="{ name: 'Crud' }" exact>
            <v-list-item-icon>
              <v-icon>mdi-table</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Crud Héroes</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
