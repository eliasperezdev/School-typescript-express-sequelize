import express from 'express';
import controller from '../controllers/parentController';

const router : express.Router = express.Router();

router.get('/:id', controller.getParent);
router.post('/', controller.addParent);
router.put('/:id', controller.updateParent);
router.delete('/', controller.deleteParent);

export default router;
