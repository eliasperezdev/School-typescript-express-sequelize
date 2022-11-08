import { Request, Response } from 'express';

const addSubject = async (req: Request, res: Response) => {
  console.log('add Subject');
};

const getSubjects = async (req: Request, res: Response) => {
  console.log('get Subjects');
};

const getSubject = async (req: Request, res: Response) => {
  console.log('get Subject');
};

const updateSubject = async (req: Request, res: Response) => {
  console.log('update Subject');
};

const deleteSubject = async (req: Request, res: Response) => {
  console.log('delete Subject');
};

export default {
  addSubject,
  getSubject,
  getSubjects,
  updateSubject,
  deleteSubject,
};
