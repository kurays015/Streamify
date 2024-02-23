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

export default function ReusableSelect({ info, setFilteredEpisodes }) {
  const { queryParams, setQueryParams } = useMetaContext();

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
        <SelectValue
          placeholder={!info.seasons ? "Choose provider" : "Season"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectOptions info={info} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
