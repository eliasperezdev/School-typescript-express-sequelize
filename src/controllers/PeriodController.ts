import { Request, Response } from 'express';
import db from '../models';

const addPeriod = async (req: Request, res: Response) => {
  console.log('add Period');
};

const getPeriods = async (req: Request, res: Response) => {
  try {
    const periods = await db.Period.findAll();
    return res.status(200).json(periods);
  } catch (error) {
    return res.status(500).json(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPeriod = async (_req: Request, _res: Response) => {
  // TODO ver que devolver Materias? Clases?
};

const updatePeriod = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    startDate, endDate
  } = req.body;
  try {
    const period = await db.Period.findOne({ where: { id } });
    if (!period) {
      return res.status(404).json('No found');
    }
    if (startDate) period.startDate = startDate;
    if (endDate) period.endDate = endDate;

    period.save();
    return res.status(200).json(period);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export default {
  addPeriod,
  getPeriod,
  getPeriods,
  updatePeriod,
};
