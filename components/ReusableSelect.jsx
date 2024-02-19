import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SeasonSelectButton from "./SeasonSelectButton";

export default function ResusableSelect({
  info,
  setFilteredEpisodes,
  setChapters,
}) {
  React.useEffect(() => {
    setFilteredEpisodes && setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (info.type === "TV Series") {
          const filteredEpisode = info.episodes.filter(
            episode => episode.season === value
          );
          setFilteredEpisodes && setFilteredEpisodes(filteredEpisode);
        } else {
          setChapters && setChapters(value.chapters);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue placeholder={"Season"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SeasonSelectButton info={info} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
