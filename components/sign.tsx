"use client";

import { Button } from "@/components/ui/button";
import { signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { Icon, Loader2 } from "tabler-icons-react";

type SignInButtonProps = {
  provider: string;
  icon?: Icon;
};

export function SignInButton({ provider, icon: Icon }: SignInButtonProps) {
  const [isLoading, setLoading] = useState(false);

  const login = async () => {
    try {
      setLoading(true);
      await signIn(provider.toLowerCase());
    } catch (error) {
      // Toast notification
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button className="w-full font-bold" disabled={isLoading} type="button" onClick={login}>
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : Icon ? <Icon className="mr-2 h-4 w-4" /> : null}
      {provider}
    </Button>
  );
}

export function SignOutButton() {
  return <Button onClick={async () => signOut()}>Sign out</Button>;
}
