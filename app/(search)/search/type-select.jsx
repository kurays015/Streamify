import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { searchType } from "@/lib/searchType";

export default function TypeSelect({ name, placeholder, onValueChange }) {
  return (
    <Select name={name} onValueChange={onValueChange}>
      <SelectTrigger className="w-full bg-gray-700 text-gray-100">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-gray-700 text-gray-100">
        {searchType.types.map(type => (
          <SelectItem key={type} value={type} className="cursor-pointer">
            {type}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
