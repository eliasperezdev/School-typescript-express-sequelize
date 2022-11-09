import express from 'express';
import controller from '../controllers/teacherController';

const router : express.Router = express.Router();

router.get('/', controller.getTeachers);
router.get('/:id', controller.getTeacher);
router.post('/', controller.addTeacher);
router.put('/:id', controller.updateTeacher);
router.delete('/', controller.deleteTeacher);

export default router;
