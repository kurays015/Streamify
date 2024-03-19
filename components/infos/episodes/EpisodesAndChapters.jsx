"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import EpisodeDropdown from "./EpisodeDropdown";
import PrevButton from "@/components/watch-read/PrevButton";
import NextButton from "@/components/watch-read/NextButton";

export default function EpisodesAndChapters({ id, info, episodeId }) {
  const currentEpisodeIndex = info.episodes.findIndex(
    episode => episode.id === episodeId
  );
  const [currentIndex, setCurrentIndex] = useState(currentEpisodeIndex);
  const router = useRouter();

  const handlePrevClick = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(prevIndex);
    navigateToWatchPage(info.episodes[prevIndex].id);
  };

  const handleNextClick = () => {
    const nextIndex = Math.min(currentIndex + 1, info.episodes.length - 1);
    setCurrentIndex(nextIndex);
    navigateToWatchPage(info.episodes[nextIndex].id);
  };

  const navigateToWatchPage = episodeId => {
    router.push(`/watch/${id}/${episodeId}`);
  };

  return (
    <div className="flex customSm:flex-col customSm:gap-5 customSemiMd2:flex-row customSemiMd2:gap-0 customSemiMd2:justify-between">
      <PrevButton
        currentIndex={currentIndex}
        handlePrevClick={handlePrevClick}
      />
      <EpisodeDropdown info={info} />
      <NextButton
        currentIndex={currentIndex}
        handleNextClick={handleNextClick}
        {...info}
      />
    </div>
  );
}
