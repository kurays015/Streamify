import { SelectItem } from "./ui/select";

export default function SelectOptions({ info }) {
  const selectContent = info.seasons ? info.seasons : info;
  return (
    <>
      {selectContent.map((content, index) => (
        <SelectItem
          value={content}
          key={index}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          {!info.seasons ? content : `Season ${content.season}`}
        </SelectItem>
      ))}
    </>
  );
}
