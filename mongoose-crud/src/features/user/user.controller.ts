import { Request, Response } from "express";
import User from "./user.model.js";
import { userValidator } from "../../utils/validators.js";

// GET /users
export const getUsers = async (req: Request, res: Response) => {
  const users = await User.find();

  return res.status(200).json(users);
};

// GET /users/:id
export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findById(id);

  return res.status(200).json(user);
};

// POST /users
export const createUser = async (req: Request, res: Response) => {
  const { name, age } = userValidator.parse(req.body);
  const user = new User({ name, age });
  await user.save();

  return res.status(200).json(user);
};

// PATCH /users/:id
export const updateUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, age } = userValidator.optional().parse(req.body);
  const user = await User.findByIdAndUpdate(id, { name, age }, { new: true });

  if (!user) return res.status(404).json({ error: "User not found" });

  return res.status(200).json(user);
};

// DELETE /users/:id
export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) return res.status(404).json({ error: "User not found" });

  return res.status(200).json(user);
};
