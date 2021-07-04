<template>
  <v-data-table :headers="headers" :search="searchHeroe" sort-by="name">
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
    <template v-slot:no-data> No hay ningún héroe</template>
  </v-data-table>
</template>

<script>
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
        { text: 'Casa publicadora', value: 'publisher' },
        { text: 'Raza', value: 'race' },
        { text: 'Género', value: 'gender' },
        { text: 'Bando', value: 'alignment' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
    };
  },
};
</script>

<style></style>
