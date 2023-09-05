import { Request, Response } from "express";
import User from "../models/User.js";
import { userValidator } from "../lib/validators.js";

export const userController = {
  getAll: async (req: Request, res: Response) => {
    try {
      const users = await User.find();

      return res.status(200).json({
        info: {
          count: users.length,
        },
        results: users,
      });
    } catch (err) {
      return res.status(500).json({
        error: err,
      });
    }
  },

  create: async (req: Request, res: Response) => {
    const { name, age } = userValidator.parse(req.body);
    const user = new User({ name, age });
    await user.save();

    return res.status(200).json(user);
  },
};
