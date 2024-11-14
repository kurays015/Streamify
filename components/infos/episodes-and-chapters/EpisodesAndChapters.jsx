"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import PrevButton from "@/components/watch-read/PrevButton";
import NextButton from "@/components/watch-read/NextButton";
import EpisodeDropdown from "./EpisodeDropdown";

export default function EpisodesAndChapters({ info, id, episodeId }) {
  const currentEpisodeIndex = info.episodes.findIndex(
    episode => episode.id === episodeId
  );
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(currentEpisodeIndex);

  const handlePrevClick = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(prevIndex);
    navigateToWatchPage(info.episodes[prevIndex]?.id);
  };

  const handleNextClick = () => {
    const nextIndex = Math.min(currentIndex + 1, info.episodes.length - 1);
    setCurrentIndex(nextIndex);
    navigateToWatchPage(info.episodes[nextIndex]?.id);
  };

  const navigateToWatchPage = currentId => {
    router.push(`/watch/${id}/${currentId}`);
  };

  return (
    <div className="flex customSm:flex-col customSm:gap-5 customSemiMd2:flex-row customSemiMd2:gap-0 customSemiMd2:justify-between">
      <PrevButton
        currentIndex={currentIndex}
        handlePrevClick={handlePrevClick}
        info={info}
      />
      <EpisodeDropdown info={info} currentEpisodeIndex={currentEpisodeIndex} />
      <NextButton
        currentIndex={currentIndex}
        handleNextClick={handleNextClick}
        episodesOrChapters={info.episodes}
        info={info}
      />
    </div>
  );
}
