import { Request, Response } from 'express';
import db from '../models';

const addParent = async (req: Request, res: Response) => {
  const {
    firstName, lastName, phone, email,
  } = req.body;

  try {
    const newParent = await db.Parent.create({
      firstName,
      lastName,
      phone,
      email,
    });
    return res.status(201).json(newParent);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getParent = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const parent = await db.Parent.findOne({ where: { id } });
    if (!parent) {
      return res.status(404).json('No found');
    }
    return res.status(200).json(parent);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const updateParent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    firstName, lastName, phone, email,
  } = req.body;
  try {
    const parent = await db.Parent.findOne({ where: { id } });
    if (!parent) {
      return res.status(404).json('No found');
    }
    if (firstName) parent.firstName = firstName;
    if (lastName) parent.lastName = lastName;
    if (phone) parent.phone = phone;
    if (email) parent.email = email;

    parent.save();
    return res.status(200).json(parent);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteParent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const parentDeleted = await db.Teacher.destroy({ where: { id } });
  if (!parentDeleted) return res.status(500).json('Parent not found');
  return res.status(204);
};

export default {
  addParent,
  updateParent,
  deleteParent,
  getParent,
};
