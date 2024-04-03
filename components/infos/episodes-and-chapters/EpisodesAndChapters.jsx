"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import PrevButton from "@/components/watch-read/PrevButton";
import NextButton from "@/components/watch-read/NextButton";
import EpisodeDropdown from "./EpisodeDropdown";

export default function EpisodesAndChapters({ info, id, episodeId }) {
  const searchParams = useSearchParams();
  const chapterId = searchParams.get("chapterId");
  const EpisodeIdOrchapterId = episodeId ? episodeId : chapterId;
  const episodesOrChapters = info.episodes ? info.episodes : info.chapters;

  const currentEpisodeIndex = episodesOrChapters.findIndex(
    episode => episode.id === EpisodeIdOrchapterId
  );

  const [currentIndex, setCurrentIndex] = useState(currentEpisodeIndex);

  const router = useRouter();

  const handlePrevClick = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    setCurrentIndex(prevIndex);
    navigateToWatchPage(episodesOrChapters[prevIndex]?.id);
  };

  const handleNextClick = () => {
    const nextIndex = Math.min(currentIndex + 1, episodesOrChapters.length - 1);
    setCurrentIndex(nextIndex);
    navigateToWatchPage(episodesOrChapters[nextIndex]?.id);
  };

  const navigateToWatchPage = currentId => {
    const wathAndReadRoute = info.episodes
      ? `/watch/${id}/${currentId}`
      : `/read/${id}?chapterId=${currentId}`;

    router.push(wathAndReadRoute);
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
        episodesOrChapters={episodesOrChapters}
        info={info}
      />
    </div>
  );
}
