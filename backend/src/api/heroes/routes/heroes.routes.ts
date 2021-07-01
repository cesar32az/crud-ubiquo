import { Router } from 'express';
import { getAllHeroes } from '../controller/heroes.controller';

const router = Router();

router.get('/', getAllHeroes);

export default router;
