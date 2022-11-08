import { Request, Response } from 'express';

const addTeacher = async (req: Request, res: Response) => {
  console.log('add Teacher');
};

const getTeachers = async (req: Request, res: Response) => {
  console.log('get Teachers');
};

const getTeacher = async (req: Request, res: Response) => {
  console.log('get Teacher');
};

const updateTeacher = async (req: Request, res: Response) => {
  console.log('update Teacher');
};

const deleteTeacher = async (req: Request, res: Response) => {
  console.log('delete Teacher');
};

export default {
  addTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};
