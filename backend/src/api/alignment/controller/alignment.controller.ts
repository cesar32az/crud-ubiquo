import { Request, Response } from 'express';

import Alignment from '../model/Alignment';

export const getAlignment = async (req: Request, res: Response) => {
  try {
    const alignment = await Alignment.find();
    return res.json({alignment})
  } catch (error) {
    console.log(error);
  }
};
