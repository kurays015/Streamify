import Link from "next/link";
import { Button } from "./ui/button";

export default function WatchAndInfoError() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-slate-400 text-center customSm:w-full customSm:leading-7 px-3">
      <h1>Oops! Something Went Wrong!</h1>
      <p>
        Remember, I do not control the content provided here. All contents are
        provided by non-affiliated third parties.
      </p>
      <p>Try others or try again later.</p>
      <Link href="/">
        <Button variant="secondary" className="my-5">
          Go back home
        </Button>
      </Link>
      <p>Sorry na...</p>
    </div>
  );
}
