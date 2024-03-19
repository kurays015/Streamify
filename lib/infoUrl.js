import getProviderId from "./getProviderId";

export default function infoUrl(result) {
  if (result.episodeId || result.episodeTitle) {
    const newEpisodeId = `${result.title?.romaji
      ?.replace(/[-:. \s]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase()}-episode-${result.episodeNumber}`;

    const recentEpisode =
      result.episodeId === "undefined" ? newEpisodeId : result.episodeId;

    return `/watch/${result.id}/${recentEpisode}`;
  } else if (result.image?.includes("readlightnovels.net")) {
    return `/category-info/${result.id}`;
  } else {
    const providerId = getProviderId(result);
    const tmdbParams =
      typeof result.title !== "object"
        ? `&tmdbParams=${
            result.name || result.type === "TV Series" ? "tv" : "movie"
          }`
        : "";

    const infoPath = isNaN(parseInt(result.id))
      ? result.id
      : `${result.id}?providerId=${providerId}${tmdbParams}`;

    return `/info/${infoPath}`;
  }
}

export function providerUrl(providerId, id, params) {
  if (providerId) {
    return `/meta/${
      providerId === "tmdb"
        ? "tmdb"
        : providerId === "anilist"
        ? "anilist"
        : "anilist-manga"
    }/info/${id}${params}`;
  } else {
    return `/anime/gogoanime/info/${id}`;
  }
}
