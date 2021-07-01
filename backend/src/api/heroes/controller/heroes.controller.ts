import { Request, Response } from 'express';

export const getAllHeroes = (req: Request, res: Response) => {
  try {
    res.json({ message: 'all heroes' });
  } catch (error) {
    console.log(error);
  }
};
