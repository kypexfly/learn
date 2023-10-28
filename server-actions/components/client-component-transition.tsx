"use client";

import React, { useTransition } from "react";
import { getUsers } from "@/actions/get-users";

const ClientComponentTransition = () => {
  const [pending, startTransition] = useTransition();

  return (
    <button
      disabled={pending}
      onClick={() => startTransition(() => getUsers())}
      className="px-2 py-1 bg-blue-500"
    >
      ClientComponent with useTransition
    </button>
  );
};

export default ClientComponentTransition;
