import { SelectItem } from "./ui/select";

export default function SelectOptions({ info }) {
  return (
    <>
      {info.map((data, index) => (
        <SelectItem
          value={data}
          key={index}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          {data === "Movie" ? "Movie/Series" : data.id ? data.id : data}
        </SelectItem>
      ))}
    </>
  );
}
