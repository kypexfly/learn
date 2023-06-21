"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-slate-900">
      <div className="container">
        <nav>
          <ul className="flex gap-3 [&_li]:px-2 [&_li]:py-4">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
