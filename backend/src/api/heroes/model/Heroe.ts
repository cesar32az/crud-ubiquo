import { Schema, model } from 'mongoose';

const heroInformationSchema = new Schema(
  {
    hero_id: {
      type: Number,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    eye_color: {
      type: String,
      required: true,
    },
    hair_color: {
      type: String,
      required: true,
    },
    skin_color: {
      type: String,
      required: true,
    },
    race: {
      type: String,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
    publisher_id: { type: Number, required: true },
    gender_id: { type: Number, required: true },
    alignment_id: { type: Number, required: true },
  },
  {
    versionKey: false,
    collection: 'hero_information',
  },
);

export default model('hero_information', heroInformationSchema);
