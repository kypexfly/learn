"use client";
import { useTransition } from "react";
import { deleteTodo } from "./actions";

const DeleteTodoButton = ({ id }: { id: string }) => {
  const [pending, startTransition] = useTransition();

  return (
    <button
      disabled={pending}
      onClick={() => startTransition(() => deleteTodo(id))}
      className="disabled:opacity-50 bg-red-500 px-4"
    >
      X
    </button>
  );
};

export default DeleteTodoButton;
