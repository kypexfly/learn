import { config } from "dotenv";

config();

export const MONGODB_URI = process.env.MONGODB_URI || "mongodb://root:example@localhost:27017/projectsdb?authSource=admin";
