<template>
  <div v-if="alignment">
    <v-tooltip top color="blue">
      <template v-slot:activator="{ on, attrs }">
        <v-icon color="yellow" v-bind="attrs" v-on="on" v-if="alignment=='good'">
          mdi-emoticon-happy-outline
        </v-icon>
        <v-icon color="error" v-bind="attrs" v-on="on" v-else-if="alignment=='bad'">
          mdi-emoticon-devil-outline
        </v-icon>
        <v-icon color="primary" v-bind="attrs" v-on="on" v-else-if="alignment=='neutral'">
          mdi-emoticon-neutral-outline
        </v-icon>
      </template>
      <span>{{alignment}}</span>
    </v-tooltip>
  </div>
</template>

<script>
export default {
  name: 'Emoticon',
  props: {
    alignment: String || null,
  },
};
</script>
