import { Schema, model } from 'mongoose';

const alignmentSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    alignment_id: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    collection: 'alignment',

  },
);

export default model('alignment', alignmentSchema);
