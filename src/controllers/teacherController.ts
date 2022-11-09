import { Request, Response } from 'express';
import db from '../models';

const addTeacher = async (req: Request, res: Response) => {
  const { firstName, lastName, phone, email } = req.body;

  try {
    const newTeacher = await db.Teacher.create({
      firstName,
      lastName,
      phone,
      email,
    });
    return res.status(201).json(newTeacher);
  } catch (error) {
    return res.status(500).json(error);
  }
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
