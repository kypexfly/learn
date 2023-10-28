import React from "react";
import { getUsers } from "@/actions/get-users";

const ServerComponentForm = () => {
  return (
    <form action={getUsers}>
      <button className="px-2 py-1 bg-blue-500">ServerComponentForm</button>
    </form>
  );
};

export default ServerComponentForm;
