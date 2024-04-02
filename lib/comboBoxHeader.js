export default function comboBoxHeader(
  value,
  info,
  pathname,
  episodes,
  currentEpisodeIndex,
  content,
  episodesOrChapters
) {
  if (value) {
    if (info.episodes) {
      return pathname.startsWith("/category-info") ||
        pathname.startsWith("/info")
        ? episodes
          ? `Episode ${episodes ? episodes : ""}`
          : "Select Episodes"
        : `Episode ${episodesOrChapters[currentEpisodeIndex]?.number}`;
    } else {
      const chapter = episodesOrChapters.find(chapter => chapter.id === value);

      return chapter ? chapter.title : "Select Chapters";
    }
  } else {
    return `Select ${content}`;
  }
}
