import { Request, Response } from 'express';

const addClass = async (req: Request, res: Response) => {
  console.log('add Class');
};

const getClasses = async (req: Request, res: Response) => {
  console.log('get Classs');
};

const getClass = async (req: Request, res: Response) => {
  console.log('get Class');
};

const updateClass = async (req: Request, res: Response) => {
  console.log('update Class');
};

const deleteClass = async (req: Request, res: Response) => {
  console.log('delete Class');
};

export default {
  addClass,
  getClass,
  getClasses,
  updateClass,
  deleteClass,
};
