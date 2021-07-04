import { Router } from 'express';
import { updateHeroe } from '../controller/heroes.controller';
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
  .delete('/:id', deleteHeroe)
  .put('/:id', updateHeroe);

export default router;
