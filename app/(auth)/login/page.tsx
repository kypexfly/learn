import { SignIn } from "@/components/sign";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { BrandGithub, BrandGoogle } from "tabler-icons-react";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Authenticate with your Github or Google account.</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-3">
          <SignIn provider="Github" />
          <SignIn provider="Google" />
        </CardFooter>
      </Card>
    </div>
  );
}
