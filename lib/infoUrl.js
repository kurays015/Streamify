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
    return `/lightnovel-info/${result.id}`;
  } else if (result.thumbnail) {
    const splittedId = result.id?.split("/");
    return `/news-info/${splittedId[2]}?id=${result.id}`;
  } else {
    const providerId = getProviderId(result);
    const tmdbParams =
      typeof result.title !== "object"
        ? `&tmdbParams=${
            result.name || result.type === "TV Series" ? "tv" : "movie"
          }`
        : "";

    const infoPath = isNaN(parseInt(result.id))
      ? result.id //anime/manga
      : `${result.id}?providerId=${providerId}${tmdbParams}`; //movie/movie-series

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
