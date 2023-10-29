import React from "react";

import { getTodos } from "./actions";
import AddTodoForm from "./AddTodoForm";
import DeleteTodoButton from "./DeleteTodoButton";

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Todo Page</h1>

      <AddTodoForm />

      <ul className="flex flex-col gap-2 my-3">
        {todos.map((todo) => {
          const { id, description } = todo;
          return (
            <li key={id} className="flex gap-3">
              <DeleteTodoButton id={id} />
              <div>
                <span className="text-sm opacity-50">{id}</span>
                <p>{description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
