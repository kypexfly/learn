"use client";

import React from "react";
import { getUsers } from "@/actions/get-users";

const ClientComponentForm = () => {
  return (
    <form action={getUsers}>
      <button className="px-2 py-1 bg-blue-500">ClientComponentForm</button>
    </form>
  );
};

export default ClientComponentForm;
