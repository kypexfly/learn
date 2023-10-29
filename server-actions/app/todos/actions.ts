"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const getTodos = async () => {
  return db.task.findMany();
};

export const createTodo = async (data: FormData) => {
  console.log("createTodo");
  const { description } = Object.fromEntries(data);

  await db.task.create({
    data: {
      description: description as string,
    },
  });

  revalidatePath("/todos");
};
