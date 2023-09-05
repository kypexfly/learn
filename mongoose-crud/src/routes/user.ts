import { Router } from "express";
import { userController } from "../controllers/user.js";

export const userRouter = Router();

userRouter.get("/", userController.getAll);
userRouter.post("/", userController.create);

userRouter.get("/:id", () => {});
userRouter.delete("/:id", () => {});
userRouter.patch("/:id", () => {});
