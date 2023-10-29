import React from "react";

import { getTodos } from "./actions";
import AddTodoForm from "./AddTodoForm";

export default async function TodoPage() {
  const todos = await getTodos();

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Todo Page</h1>

      <AddTodoForm />

      <div>
        <pre>{JSON.stringify(todos, null, 2)}</pre>
      </div>
    </div>
  );
}
