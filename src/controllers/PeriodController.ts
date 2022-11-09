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

const getPeriod = async (req: Request, res: Response) => {
  console.log('get Period');
};

const updatePeriod = async (req: Request, res: Response) => {
  console.log('update Period');
};

export default {
  addPeriod,
  getPeriod,
  getPeriods,
  updatePeriod,
};
