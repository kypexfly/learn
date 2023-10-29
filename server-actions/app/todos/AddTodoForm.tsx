"use client";

import { useRef } from "react";
import { createTodo } from "./actions";

const AddTodoForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  async function action(data: FormData) {
    await createTodo(data);
    formRef?.current?.reset();
  }

  return (
    <form ref={formRef} action={action} className="flex gap-2">
      <input
        name="description"
        placeholder="description"
        type="text"
        className="bg-zinc-700 px-1"
      />
      <button className="px-2 py-1 bg-blue-500">Add</button>
    </form>
  );
};

export default AddTodoForm;
