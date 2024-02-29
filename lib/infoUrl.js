import getProviderId from "./getProviderId";

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
