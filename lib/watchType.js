export default function watchType(infoData) {
  return infoData.name ? "tv" : infoData.type === "TV" ? "anime" : "movie";
}
