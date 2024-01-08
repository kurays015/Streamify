import Link from "next/link";

export default async function Home() {
  return (
    <main className="">
      <h1 className="text-white text-xl">home page!</h1>
      <Link href="/signin">Login</Link>
    </main>
  );
}
