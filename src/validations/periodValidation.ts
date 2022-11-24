import { body } from 'express-validator';

const addPeriod = [
  body('year').not().isEmpty().withMessage('Year cannot be empty'),
  body('startDate').not().isEmpty().withMessage('Start date cannot be empty'),
  body('endDate').not().isEmpty().withMessage('End date cannot be empty'),
];

export default {
  addPeriod,
};
