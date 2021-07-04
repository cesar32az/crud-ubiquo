import { Router, Request, Response } from 'express';

import heroesRoutes from '../api/heroes/routes/heroes.routes';
import alignmentRoutes from '../api/alignment/routes/alignment.routes';
import genderRoutes from '../api/gender/routes/gender.routes';
import publisherRoutes from '../api/publisher/routes/publisher.routes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Api crud mongodb' });
});

router
  .use('/heroes', heroesRoutes)
  .use('/alignment', alignmentRoutes)
  .use('/gender', genderRoutes)
  .use('/publisher', publisherRoutes);

export default router;
