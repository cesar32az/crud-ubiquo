import { Router, Request, Response } from 'express';
import heroesRoutes from '../api/heroes/routes/heroes.routes'

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Api crud mongodb' });
});

router.use('/heroes', heroesRoutes)

export default router;
