import { Request, Response } from 'express';
import db from '../models';
import { Teacher } from '../models/Teacher';

const addTeacher = async (req: Request, res: Response) => {
  const {
    firstName, lastName, phone, email,
  } = req.body;

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
  const { id } = req.params;
  try {
    const teacher = await db.Teacher.findOne({ where: { id } });
    if (!teacher) {
      return res.status(404).json('No found');
    }
    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    firstName, lastName, phone, email,
  } = req.body;
  try {
    const teacher = await db.Teacher.findOne({ where: { id } });
    if (!teacher) {
      return res.status(404).json('No found');
    }
    if (firstName) teacher.firstName = firstName;
    if (lastName) teacher.lastName = lastName;
    if (phone) teacher.phone = phone;
    if (email) teacher.email = email;

    teacher.save();
    return res.status(200).json(teacher);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTeacher = async (req: Request, res: Response) => {
  const { id } = req.params;
  const teacherDeleted = await db.Teacher.destroy({ where: { id } });
  if (!teacherDeleted) return res.status(500).json('Teacher not found');
  return res.status(204);
};

export default {
  addTeacher,
  getTeacher,
  getTeachers,
  updateTeacher,
  deleteTeacher,
};
