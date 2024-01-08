import Link from "next/link";

export default async function Home() {
  return (
    <main className="text-center">
      <h1 className="text-white text-xl">home page!</h1>
      <Link href="/signin" className="text-white">
        Login
      </Link>
    </main>
  );
}
