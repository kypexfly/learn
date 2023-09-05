import express from "express";
import { connectDB } from "./lib/db.js";
import { userRouter } from "./routes/user.js";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.disable("x-powered-by");

await connectDB();

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] 🚀 http://${host}:${port}`);
});
