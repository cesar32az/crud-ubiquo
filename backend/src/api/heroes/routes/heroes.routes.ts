import { Router } from 'express';
import { getAllHeroes, getOneHeroe } from '../controller/heroes.controller';

const router = Router();

router.get('/:id', getOneHeroe).get('/', getAllHeroes);

export default router;
