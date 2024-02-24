import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SelectOptions from "./SelectOptions";
import { useMetaContext } from "@/app/hooks/useMetaContext";
import { useRouter } from "next/navigation";

export default function ReusableSelect({ info, setFilteredEpisodes }) {
  const { setQueryParams } = useMetaContext();
  React.useEffect(() => {
    setFilteredEpisodes && setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (info.type === "TV Series") {
          setFilteredEpisodes && setFilteredEpisodes(value.episodes);
        } else {
          setQueryParams(value);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={!info.seasons ? "Select type" : "Season"} />
      </SelectTrigger>
      <SelectContent
        ref={ref => {
          if (!ref) return;
          ref.ontouchstart = e => {
            e.preventDefault();
          };
        }}
      >
        <SelectGroup>
          <SelectOptions info={info} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
