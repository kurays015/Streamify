import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Season from "./Season";

export default function ResusableSelect({
  infoData,
  setFilteredEpisodes,
  setChapters,
}) {
  React.useEffect(() => {
    setFilteredEpisodes && setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (infoData.type === "TV Series") {
          const filteredEpisode = infoData.episodes.filter(
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
          <Season infoData={infoData} />
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
