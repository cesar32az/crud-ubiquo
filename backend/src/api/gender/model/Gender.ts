import { Schema, model } from 'mongoose';
import { IGender } from '../interface/gender.interface';

export const genderSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    gender_id: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    collection: 'gender',
  },
);

export default model<IGender>('Gender', genderSchema);
