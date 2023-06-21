import { getCurrentUser } from "@/lib/session";
import Link from "next/link";
import { SignOut } from "./sign";
import { Button } from "./ui/button";

export async function Navbar() {
  const user = await getCurrentUser();

  return (
    <header className="bg-slate-900 border-b">
      <div className="container flex justify-between items-center">
        <nav>
          <ul className="flex gap-3 [&_li]:px-2 [&_li]:py-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/protected">Protected</Link>
            </li>
          </ul>
        </nav>
        {user ? (
          <div className="flex gap-3 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="w-12 h-12 rounded-full" src={user.image!} alt={user.name!} />
            {user.name}
            <SignOut />
          </div>
        ) : (
          <ul>
            <li>
              <Button variant="default" asChild>
                <Link href="/login">Login</Link>
              </Button>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
