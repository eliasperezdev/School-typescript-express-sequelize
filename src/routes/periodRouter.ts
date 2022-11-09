import express from 'express';
import controller from '../controllers/PeriodController';

const router : express.Router = express.Router();

router.get('/', controller.getPeriod);
router.post('/', controller.addPeriod);
router.put('/:id', controller.updatePeriod);

export default router;
