import { useContext } from "react";
import { EpisodeContext } from "../context/EpisodesContext";

export const useEpisodeContext = () => {
  return useContext(EpisodeContext);
};
