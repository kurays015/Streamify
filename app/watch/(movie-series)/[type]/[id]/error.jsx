"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function error() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-200 text-center">
      <h1>Oops! Something Went Wrong!</h1>
      <p>
        Remember, I do not control the content provided here. All contents are
        provided by non-affiliated third parties.
      </p>
      <Link href="/">
        <Button variant="secondary">Go back home </Button>
      </Link>
    </div>
  );
}
