import { Request, Response } from 'express';

const addStudent = async (req: Request, res: Response) => {
  console.log('add student');
};

const getStudents = async (req: Request, res: Response) => {
  console.log('get students');
};

const getStudent = async (req: Request, res: Response) => {
  console.log('get student');
};

const updateStudent = async (req: Request, res: Response) => {
  console.log('update student');
};

const deleteStudent = async (req: Request, res: Response) => {
  console.log('delete student');
};

export default {
  addStudent,
  getStudent,
  getStudents,
  updateStudent,
  deleteStudent,
};
