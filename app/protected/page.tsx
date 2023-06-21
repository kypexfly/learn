import { getCurrentUser } from "@/lib/session";

export default async function Page() {
  const user = await getCurrentUser();

  if (!user) return <>This is a protected route. You must be signed in to view it.</>;

  return (
    <>
      <h1>Protected Route</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </>
  );
}
