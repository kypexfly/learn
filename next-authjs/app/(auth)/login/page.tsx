import { SignInButton } from "@/components/sign";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function Login() {
  return (
    <div className="flex items-center justify-center w-full">
      <Card className={cn("w-[380px]")}>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Authenticate with your Github or Google account.</CardDescription>
        </CardHeader>
        <CardFooter className="flex-col gap-3">
          <SignInButton provider="Github" />
          <SignInButton provider="Google" />
        </CardFooter>
      </Card>
    </div>
  );
}
