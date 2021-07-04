import { Schema, model } from 'mongoose';
import { IHeroe } from '../interface/heroe.interface';

const heroInformationSchema = new Schema(
  {
    hero_id: {
      type: Number,
      unique: true,
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
    publisher_id: { type: Number, requierd: true },
    gender_id: { type: Number, requierd: true },
    alignment_id: { type: Number, requierd: true },
  },
  {
    versionKey: false,
    collection: 'hero_information',
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

heroInformationSchema.virtual('genderInfo', {
  ref: 'Gender',
  localField: 'gender_id',
  foreignField: 'gender_id',
  justOne: true,
});

heroInformationSchema.virtual('alignmentInfo', {
  ref: 'Alignment',
  localField: 'alignment_id',
  foreignField: 'alignment_id',
  justOne: true,
});

heroInformationSchema.virtual('publisherInfo', {
  ref: 'Publisher',
  localField: 'publisher_id',
  foreignField: 'publisher_id',
  justOne: true,
});

export default model<IHeroe>('hero_information', heroInformationSchema);
