import { Router } from 'express';
import { getPublisher } from '../controller/publisher.controller';

const router = Router();

router.get('/', getPublisher);

export default router;
