import { Schema, model } from 'mongoose';
import { IAlignment } from '../interface/alignment.interface';

export const alignmentSchema = new Schema(
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

export default model<IAlignment>('Alignment', alignmentSchema);
