import { Schema, model } from 'mongoose';
import { IPublisher } from '../interface/publisher.interface';

export const publisherSchema = new Schema(
  {
    publisher_id: {
      type: Number,
      unique: true,
      required: true,
    },
    publisher_name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    versionKey: false,
    collection: 'publisher',
  },
);

export default model<IPublisher>('Publisher', publisherSchema);
