import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ClearFilter({ params }) {
  if (!params.toString()) return;

  return (
    <Button asChild>
      <Link href="/search" className="bg-red-600 text-white hover:bg-red-700">
        Clear Filter
      </Link>
    </Button>
  );
}
