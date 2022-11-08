import { Request, Response } from 'express';

const addParent = async (req: Request, res: Response) => {
  console.log('add Parent');
};

const updateParent = async (req: Request, res: Response) => {
  console.log('update Parent');
};

const deleteParent = async (req: Request, res: Response) => {
  console.log('delete Parent');
};

export default {
  addParent,
  updateParent,
  deleteParent,
};
