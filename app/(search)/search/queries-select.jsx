import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import capitalFirstLetter from "@/lib/capitalFirstLetter";

export default function QueriesSelect({ type, queries }) {
  return (
    <Select key={type} name={type}>
      <SelectTrigger className="w-full bg-gray-700 text-gray-100">
        <SelectValue placeholder={capitalFirstLetter(type)} />
      </SelectTrigger>
      <SelectContent className="bg-gray-700 text-gray-100">
        <SelectGroup>
          <SelectLabel>{capitalFirstLetter(type)}</SelectLabel>
          {queries.map(query => (
            <SelectItem key={query} value={query} className="cursor-pointer">
              {type === "genres"
                ? JSON.parse(query)
                : capitalFirstLetter(query)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
