import { SelectItem } from "./ui/select";

export default function SeasonSelectButton({ info }) {
  return (
    <>
      {info.seasons.map(season => (
        <SelectItem
          value={season}
          key={season.season}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          Season {season.season}
        </SelectItem>
      ))}
    </>
  );
}
