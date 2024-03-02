import capitalFirstLetter from "@/lib/capitalFirstLetter";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";

export default function Radio({ option, title, handleChange }) {
  return (
    <div className={`flex items-center gap-2 `} key={option}>
      <Input
        id={option}
        value={option}
        name={title}
        type="radio"
        onChange={handleChange}
        className="customSm:w-3 md:w-4"
      />
      <Label htmlFor={option} className="text-slate-300">
        {capitalFirstLetter(option)}
      </Label>
    </div>
  );
}
