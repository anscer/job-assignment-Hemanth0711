import { Request, Response } from 'express';
import State from '../models/State';

export const createState = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const newState = new State({
      name,
      description,
      status: 'new',
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: 'unknown', // Assuming `req.user` is set by passport
    });

    const savedState = await newState.save();
    res.status(201).json(savedState);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getStates = async (req: Request, res: Response) => {
  try {
    const states = await State.find();
    res.status(200).json(states);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const updateState = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const state = await State.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(state);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

export const deleteState = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await State.findByIdAndDelete(id);
    res.status(200).json({ message: 'State deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
