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
      return pathname.startsWith("/info")
        ? episodeNumber
          ? `Episode ${episodeNumber ? episodeNumber : ""}`
          : "Select Episodes"
        : `Episode ${episodes[currentEpisodeIndex]?.number}`;
    }
  }
}
