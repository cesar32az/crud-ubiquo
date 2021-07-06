<template>
  <v-data-table
    :headers="headers"
    :items="heroes"
    :search="searchHeroe"
    sort-by="name"
    class="mt-10 elevation-5"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>CRUD HÉROES</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="searchHeroe"
          append-icon="mdi-magnify"
          label="Búsqueda"
          single-line
          hide-details
        ></v-text-field>
      </v-toolbar>
    </template>
    <!-- Information -->
    <template v-slot:item.publisher="{ item }">
      {{ item.publisherInfo.publisher_name }}
    </template>
    <template v-slot:item.gender="{ item }">
      {{ item.genderInfo.name }}
    </template>
    <template v-slot:item.alignment="{ item }">
      {{ item.alignmentInfo.name }}
    </template>
    <!-- Actions -->
    <template v-slot:item.actions="{ item }">
      <v-icon color="primary" class="mr-2" @click="openEditDialog(item)">
        mdi-pencil
      </v-icon>
      <v-icon color="error" @click="delHeroe(item)"> mdi-delete </v-icon>
    </template>
    <!-- No data -->
    <template v-slot:no-data>No hay ningún héroe</template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'List',
  data() {
    return {
      searchHeroe: '',
      headers: [
        {
          text: 'Nombre',
          align: 'start',
          value: 'name',
        },
        { text: 'Casa publicadora', value: 'publisherInfo.publisher_name' },
        { text: 'Raza', value: 'race' },
        { text: 'Género', value: 'genderInfo.name' },
        { text: 'Bando', value: 'alignmentInfo.name' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
    };
  },
  computed: {
    ...mapState({
      heroes: state => state.heroes,
    }),
  },
  methods: {
    ...mapActions({
      getHeroes: 'getHeroes',
      deleteHeroe: 'deleteHeroe',
      openEditDialog: 'openEditDialog',
    }),
    delHeroe(heroe) {
      confirm('¿Estás seguro de eliminar a este héroe?') && this.deleteHeroe(heroe);
    },
  },
  mounted() {
    this.getHeroes();
  },
  updated() {},
};
</script>

<style></style>
