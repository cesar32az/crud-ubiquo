import { Request, Response } from 'express';
import Heroe from '../model/Heroe';
export const getAllHeroes = async (req: Request, res: Response) => {
  try {
    const heroes = await Heroe.find();

    return res.json({ message: 'Heroes encontrados', heroes });
  } catch (error) {
    console.log(error);
  }
};
