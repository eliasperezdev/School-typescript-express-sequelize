import { Request, Response } from 'express';

const addAttandace = async (req: Request, res: Response) => {
  console.log('add Attandace');
};

const getAttandaces = async (req: Request, res: Response) => {
  console.log('get Attandaces');
};

const updateAttandace = async (req: Request, res: Response) => {
  console.log('update Attandace');
};

export default {
  addAttandace,
  getAttandaces,
  updateAttandace,
};
