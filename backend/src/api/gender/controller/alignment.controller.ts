import { Request, Response } from 'express';

import Gender from '../model/Gender';

export const getGender = async (req: Request, res: Response) => {
  try {
    const gender = await Gender.find();
    return res.json({gender})
  } catch (error) {
    console.log(error);
  }
};
