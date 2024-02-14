import { SelectItem } from "./ui/select";

export default function MangaProvider({ infoData }) {
  return (
    <>
      {infoData
        .filter(info => info.providerId !== "mangapill")
        .map(info => (
          <SelectItem
            value={info}
            key={info.providerId}
            className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
          >
            {info.providerId}
          </SelectItem>
        ))}
    </>
  );
}
