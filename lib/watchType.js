export default function watchType(infoData) {
  return infoData.name || !infoData.title
    ? "tv"
    : infoData.type === "TV"
    ? "anime"
    : "movie";
}
