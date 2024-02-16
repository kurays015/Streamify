import { SelectItem } from "./ui/select";

export default function Season({ info }) {
  const uniqueSeasons = info.episodes.reduce((seasons, currentValue) => {
    return !seasons.includes(currentValue.season)
      ? [...seasons, currentValue.season]
      : seasons;
  }, []);

  return (
    <>
      {uniqueSeasons.map(season => (
        <SelectItem
          value={season}
          key={season}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          Season {season}
        </SelectItem>
      ))}
    </>
  );
}
