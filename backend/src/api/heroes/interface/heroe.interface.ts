import { Schema } from "mongoose";
export interface IHeroe extends Schema{
  _id?: string;
  hero_id?: number;
  name: string;
  eye_color: string;
  hair_color: string;
  skin_color: string;
  height: number;
  weight: number;
  race: string;
  publisher_id:any;
  gender_id: any;
  alignment_id: any;
}
