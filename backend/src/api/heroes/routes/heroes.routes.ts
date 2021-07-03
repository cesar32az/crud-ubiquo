import { Router } from 'express';
import {
  createHeroe,
  deleteHeroe,
  getAllHeroes,
  getOneHeroe,
} from '../controller/heroes.controller';

const router = Router();

router
  .get('/:id', getOneHeroe)
  .get('/', getAllHeroes)
  .post('/', createHeroe)
  .delete('/:id', deleteHeroe);

export default router;
