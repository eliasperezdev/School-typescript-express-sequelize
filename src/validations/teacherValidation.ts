import { body } from 'express-validator';

const addTeacher = [
  body('firstName').not().isEmpty().withMessage('First name cannot be empty'),
  body('lastName').not().isEmpty().withMessage('Last name cannot be empty'),
  body('email').not().isEmpty().withMessage('Organization email cannot be empty')
    .isEmail()
    .withMessage('Must be a valid email'),
  body('phone').isNumeric().withMessage('Only numbers allowed'),
];

export default {
  addTeacher,
};
