import { Router } from 'express';
import { getGender } from '../controller/gender.controller';

const router = Router();

router.get('/', getGender);

export default router;
