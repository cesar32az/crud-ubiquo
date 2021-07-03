import { Request, Response } from 'express';
import { IHero } from '../interface/heroe.interface';
import Heroe from '../model/Heroe';

export const getAllHeroes = async (req: Request, res: Response) => {
  try {
    const heroes = await Heroe.find();

    return res.json({ message: 'Heroes encontrados', heroes });
  } catch (error) {
    console.log(error);
  }
};

export const getOneHeroe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const heroe = await Heroe.findById(id);

    if (!heroe) return res.status(400).json({ message: 'Heroe no encontrado ' });

    return res.json({ message: 'Heroe encontrado', heroe });
  } catch (error) {
    console.log(error);
  }
};

export const createHeroe = async (req: Request, res: Response) => {
  try {

  } catch (error) {
    console.log(error);
  }
};

export const deleteHeroe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const heroe = await Heroe.findByIdAndDelete(id);

    if (!heroe) return res.status(400).json({ message: 'Heroe no encontrado' });

    return res.json({ message: 'Heroe eliminado con éxito', heroe_id: id });
  } catch (error) {
    console.log(error);
  }
};
