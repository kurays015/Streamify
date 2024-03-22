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
        ? `Episode ${episodes}`
        : `Episode ${episodesOrChapters[currentEpisodeIndex]?.number}`;
    } else {
      return `${
        episodesOrChapters.find(chapter => chapter.id === value)?.title
      }`;
    }
  } else {
    return `Select ${content}`;
  }
}
