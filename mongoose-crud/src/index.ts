import express from "express";
import { connectDB } from "./utils/db.js";
import { userRouter } from "./routes/user.router.js";

const host = process.env.HOST ?? "localhost";
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

await connectDB();

const app = express();
app.disable("x-powered-by");

app.use(express.json());

app.use("/api/users", userRouter);

app.listen(port, host, () => {
  console.log(`[ ready ] 🚀 http://${host}:${port}`);
});
