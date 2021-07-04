import { Request, Response } from 'express';
import Heroe from '../model/Heroe';
import Alignment from '../../alignment/model/Alignment';
import Gender from '../../gender/model/Gender';
import Publisher from '../../publisher/model/Publisher';

import { IHeroe } from '../interface/heroe.interface';

export const getAllHeroes = async (req: Request, res: Response) => {
  try {
    const heroes = await Heroe.find()
      .populate('genderInfo')
      .populate('publisherInfo')
      .populate('alignmentInfo');

    if (heroes.length == 0) return res.json({ message: 'Aún no existe ningún héroe' });

    return res.json({ message: 'Heroes encontrados', heroes });
  } catch (error) {
    console.log(error);
  }
};

export const getOneHeroe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const heroe = await Heroe.findById(id)
      .populate('genderInfo')
      .populate('publisherInfo')
      .populate('alignmentInfo');

    if (!heroe) return res.status(400).json({ message: 'Héroe no encontrado' });

    return res.json({ message: 'Héroe encontrado', heroe });
  } catch (error) {
    console.log(error);
  }
};

export const createHeroe = async (req: Request, res: Response) => {
  try {
    let heroe: IHeroe = req.body;

    // search alignment
    const alignment = await Alignment.find({ alignment_id: heroe.alignment_id });
    // search gender
    const gender = await Gender.find({ gender_id: heroe.gender_id });
    // search publisher
    const publisher = await Publisher.find({ publisher_id: heroe.publisher_id });

    if (!alignment || !gender || !publisher)
      return res.status(400).json({ message: 'Campos inválidos' });

    const newHeroe = new Heroe(heroe);
    const savedHeroe = await newHeroe.save();

    return res.status(200).json({ message: 'Héroe guardado con éxito', savedHeroe });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: 'Campos inválidos' });
  }
};

export const deleteHeroe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const heroe = await Heroe.findByIdAndDelete(id);

    if (!heroe) return res.status(400).json({ message: 'Héroe no encontrado' });

    return res.json({ message: 'Héroe eliminado con éxito', heroe_id: id });
  } catch (error) {
    console.log(error);
  }
};

export const updateHeroe = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const heroe: IHeroe = req.body;
    const updatedHeroe = await Heroe.findByIdAndUpdate(id, heroe, { new: true });

    if (!updatedHeroe) return res.status(400).json({ message: 'Héroe no encontrado' });

    return res.json({ message: 'Héroe actualizado con éxito', updatedHeroe});
  } catch (error) {
    console.log(error);
  }
};
