import { Request, Response } from 'express';

import Publisher from '../model/Publisher';

export const getPublisher = async (req: Request, res: Response) => {
  try {
    const publisher = await Publisher.find();
    return res.json({publisher})
  } catch (error) {
    console.log(error);
  }
};
