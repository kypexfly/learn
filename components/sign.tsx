"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Icon, Loader2 } from "tabler-icons-react";

type SignInProps = {
  provider: string;
  icon?: Icon;
};

export function SignIn({ provider, icon: Icon }: SignInProps) {
  const [isLoading, setLoading] = useState(false);
  return (
    <Button
      className="w-full font-bold"
      disabled={isLoading}
      type="button"
      onClick={() => {
        setLoading(true);
        signIn(provider.toLowerCase());
      }}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
      {provider}
    </Button>
  );
}

export function SignOut() {
  return <Button onClick={() => signOut()}>Sign out</Button>;
}
