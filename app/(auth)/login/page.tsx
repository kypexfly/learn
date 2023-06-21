"use client";

import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { BrandGithub, BrandGoogle, Icon, Loader2 } from "tabler-icons-react";

export default function Login() {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isGithubLoading, setIsGithubLoading] = useState(false);

  return (
    <div className="flex items-center justify-center w-full">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Authenticate with your Github or Google account.</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-3">
          <SignButton provider="Github" isLoading={isGithubLoading} icon={BrandGithub} />
          <SignButton provider="Google" isLoading={isGoogleLoading} icon={BrandGoogle} />
        </CardFooter>
      </Card>
    </div>
  );
}

type SignButtonProps = {
  provider: string;
  isLoading: boolean;
  icon: Icon;
};

const SignButton = ({ provider, isLoading, icon: Icon }: SignButtonProps) => {
  return (
    <Button
      className="w-full font-bold"
      disabled={isLoading}
      onClick={() => {
        signIn(provider);
      }}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Icon className="mr-2 h-4 w-4" />}
      {provider}
    </Button>
  );
};
