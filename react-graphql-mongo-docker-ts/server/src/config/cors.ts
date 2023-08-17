import cors from "cors";

export const corsConfig = () => {
  return cors({
    origin: "*",
    credentials: true,
  });
};
