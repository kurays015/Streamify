import { SelectItem } from "./ui/select";

export default function SelectOptions({ info }) {
  return (
    <>
      {info.map((type, index) => (
        <SelectItem
          value={type}
          key={index}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          {type === "Movie" ? "Movie/Series" : type}
        </SelectItem>
      ))}
    </>
  );
}
