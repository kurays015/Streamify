import Link from "next/link";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  // console.log(session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>hello!</h1>
      <Link href="/Login">Login</Link>
    </main>
  );
}
