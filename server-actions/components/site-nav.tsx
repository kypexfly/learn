import Link from "next/link";

export const SiteNav = () => {
  return (
    <header>
      <nav>
        <ul className="flex gap-2 bg-zinc-900 py-2">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/todos">Todo</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
