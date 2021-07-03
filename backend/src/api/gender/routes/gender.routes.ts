import { Router } from 'express';
import { getGender } from '../controller/alignment.controller';

const router = Router();

router.get('/', getGender);

export default router;
