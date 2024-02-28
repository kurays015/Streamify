export default function infoUrl(result) {
  if (result.episodeId) {
    return `/watch/${result.episodeId}`;
  } else {
    const providerId = getProviderId(result);
    const tmdbParams =
      typeof result.title !== "object"
        ? `&tmdbParams=${
            result.name || result.type === "TV Series" ? "tv" : "movie"
          }`
        : "";

    return `/info/${result.id}?providerId=${providerId}${tmdbParams}`;
  }
}

function getProviderId(result) {
  if (
    result.type === "Movie" ||
    result.type === "TV Series" ||
    typeof result.title !== "object" ||
    result.name
  ) {
    return "tmdb";
  } else if (result.type === "TV") {
    return "anilist";
  } else {
    return "anilist-manga";
  }
}
