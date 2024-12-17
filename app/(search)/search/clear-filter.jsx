import { Button } from "@/components/ui/button";

export default function ClearFilter({ clearFilter, params }) {
  if (!params.toString()) return;

  return (
    <Button
      onClick={clearFilter}
      className="bg-red-600 text-white hover:bg-red-700"
    >
      Clear Filter
    </Button>
  );
}
