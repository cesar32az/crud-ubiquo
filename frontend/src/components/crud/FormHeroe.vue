<template>
  <v-dialog v-model="dialog" max-width="50rem" persistent>
    <v-card>
      <v-card-title>
        <span class="headline">{{ dialogType == 'add' ? 'Agregar héroe' : 'Editar héroe' }}</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="heroe.name"
                autofocus
                label="Nombre"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="heroe.eye_color"
                label="Color de ojos"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="heroe.hair_color"
                label="Color de cabello"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="heroe.skin_color"
                label="Color de piel"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="heroe.height"
                label="Altura"
                suffix="cm."
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-text-field
                v-model.number="heroe.weight"
                label="Peso"
                suffix="lbs"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-text-field
                v-model="heroe.race"
                label="Raza"
                :rules="[rules.required]"
                validate-on-blur
              ></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="heroe.publisher_id" :items="publisher" label="Casa publicadora" />
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-select v-model="heroe.gender_id" :items="gender" label="Género" />
            </v-col>
            <v-col cols="12" md="6">
              <v-select v-model="heroe.alignment_id" :items="alignment" label="Alineación" />
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="closeDialog">Cancelar</v-btn>
        <v-btn v-if="dialogType == 'add'" color="blue" text @click="addHeroe">Guardar</v-btn>
        <v-btn v-if="dialogType == 'edit'" color="teal accent-3" text @click="editHeroe"
          >Guardar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import HeroeService from '../../services/heroe.service';

export default {
  name: 'FormHeroe',
  data() {
    return {
      alignment: [],
      publisher: [],
      gender: [],
      rules: {
        required: (value) => !!value || 'Campo requerido.',
      },
    };
  },
  computed: {
    ...mapState({
      dialog: (state) => state.dialog,
      dialogType: (state) => state.dialogType,
      heroe: (state) => state.heroe,
    }),
  },
  methods: {
    ...mapActions({
      createHeroe: 'createHeroe',
      updateHeroe: 'updateHeroe',
      closeDialog: 'closeDialog',
      getHeroes: 'getHeroes',
    }),
    addHeroe() {
      this.createHeroe(this.heroe);
      setTimeout(() => {
        this.getHeroes();
      }, 500);
    },
    editHeroe() {
      this.updateHeroe(this.heroe);
      setTimeout(() => {
        this.getHeroes();
      }, 500);
    },
    async getInfoSelect() {
      const { alignment, publisher, gender } = await HeroeService.getInfoHeroes();
      this.alignment = alignment.map((item) => {
        const newItem = {
          text: item.name,
          value: item.alignment_id,
        };
        return newItem;
      });
      this.publisher = publisher.map((item) => {
        const newItem = {
          text: item.publisher_name,
          value: item.publisher_id,
        };
        return newItem;
      });
      this.gender = gender.map((item) => {
        const newItem = {
          text: item.name,
          value: item.gender_id,
        };
        return newItem;
      });
    },
  },
  mounted() {
    this.getInfoSelect();
  },
  destroyed() {},
};
</script>

<style></style>
