import { Request, Response } from 'express';

const addPeriod = async (req: Request, res: Response) => {
  console.log('add Period');
};

const getPeriods = async (req: Request, res: Response) => {
  console.log('get Periods');
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
