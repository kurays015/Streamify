export default function comboBoxHeader(
  value,
  info,
  pathname,
  episodeNumber,
  currentEpisodeIndex,
  episodes
) {
  if (value) {
    if (info.episodes) {
      return pathname.startsWith("/info") || pathname.startsWith("/embedded")
        ? episodeNumber
          ? `Episode ${episodeNumber ? episodeNumber : ""}`
          : "Select Episodes"
        : `Episode ${episodes[currentEpisodeIndex]?.number}`;
    }
  }
}
