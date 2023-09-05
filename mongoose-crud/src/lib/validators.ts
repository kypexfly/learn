import z from "zod";

export const userValidator = z.object({
  name: z.string().min(1),
  age: z.number().min(1),
});
