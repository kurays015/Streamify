import { SelectItem } from "./ui/select";

export default function SelectOptions({ info }) {
  const selectContent = info.seasons ? info.seasons : info;
  return (
    <>
      {selectContent.map(content => (
        <SelectItem
          value={content}
          key={content ? content : content.season}
          className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
        >
          {!info.seasons ? content : content.season}
        </SelectItem>
      ))}
    </>
  );
}
