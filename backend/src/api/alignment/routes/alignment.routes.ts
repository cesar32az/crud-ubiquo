import { Router } from 'express';
import { getAlignment } from '../controller/alignment.controller';

const router = Router();

router.get('/', getAlignment);

export default router;
