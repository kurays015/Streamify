import Image from "next/image";
import notfound from "@/public/404.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative text-center">
      <div className="flex justify-center">
        <Image src={notfound} alt="not-found" priority />
      </div>
      <p className="mb-2 text-slate-300">You&apos;re lost!</p>
      <Link href="/">
        <Button variant="secondary">Go back home</Button>
      </Link>
    </main>
  );
}
