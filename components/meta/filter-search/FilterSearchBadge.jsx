import { Badge } from "@/components/ui/badge";
import capitalFirstLetter from "@/lib/capitalFirstLetter";
import cleanString from "@/lib/cleanString";

export function FilterSearchBadge({ searchParams }) {
  return (
    <div className="text-white text-center mb-7 flex items-center justify-center gap-4">
      <h5 className="text-slate-300 font-semibold text-sm">Your search:</h5>
      <div className="space-x-3 ">
        {Object.values(searchParams).map(value => (
          <Badge
            className="bg-cyan-600 text-sm hover:bg-cyan-500 relative"
            key={value}
          >
            {capitalFirstLetter(cleanString(value))}
          </Badge>
        ))}
      </div>
    </div>
  );
}
