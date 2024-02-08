import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Season from "../Season";
import Chapters from "../Chapters";

export default function SelectEpisode({ infoData, setFilteredEpisodes }) {
  React.useEffect(() => {
    setFilteredEpisodes([]);
  }, []);

  return (
    <Select
      onValueChange={value => {
        if (infoData.type === "TV Series") {
          const filteredEpisode = infoData.episodes.filter(
            episode => episode.season === value
          );
          setFilteredEpisodes(filteredEpisode);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue
          placeholder={infoData.type === "TV Series" ? "Seasons" : "Chapters"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {infoData.type === "TV Series" ? (
            <Season infoData={infoData} />
          ) : (
            <Chapters infoData={infoData} />
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
