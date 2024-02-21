export default function infoUrl(result) {
  if (result.episodeId) {
    return `/watch/${result.episodeId}`;
  } else {
    const type =
      typeof result.title !== "object"
        ? `?type=${result.name || result.type === "TV Series" ? "tv" : "movie"}`
        : "";

    return `/info/${result.id}${type}`;
  }
}
