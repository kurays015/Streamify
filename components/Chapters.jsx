import titleHandler from "@/lib/titleHandler";
import { SelectItem } from "./ui/select";

export default function Chapters({ infoData }) {
  return (
    <>
      {infoData.chapters.data[0].chapters.map(({ id, title }) => (
        <SelectItem
          value={id}
          key={id}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          {titleHandler(title)}
        </SelectItem>
      ))}
    </>
  );
}
