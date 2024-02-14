import * as React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Season from "./Season";
import MangaProvider from "./MangaProvider";

export default function ResusableSelect({
  infoData,
  setFilteredEpisodes,
  setChapters,
  setProvider,
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
          setProvider && setProvider(value.providerId);
        }
      }}
    >
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue
          placeholder={
            infoData.type === "TV Series" ? "Seasons" : "Select Provider"
          }
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {infoData.type ? (
            <Season infoData={infoData} />
          ) : (
            <MangaProvider infoData={infoData} />
          )}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
