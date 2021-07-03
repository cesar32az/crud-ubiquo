import { Router } from 'express';
import { getPublisher } from '../controller/alignment.controller';

const router = Router();

router.get('/', getPublisher);

export default router;
