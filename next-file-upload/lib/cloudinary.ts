import { env } from "@/config/env";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dibrx8mhd",
  api_key: env.CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
  secure: true,
});

export default cloudinary;
