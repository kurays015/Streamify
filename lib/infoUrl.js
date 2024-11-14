// import getProviderId from "./getProviderId";

import watchType from "./watchType";

// export default function infoUrl(result) {
//   if (result.episodeId || result.episodeTitle) {
//     const newEpisodeId = `${result.title?.romaji
//       ?.replace(/[-:. \s]+/g, "-")
//       .replace(/^-+|-+$/g, "")
//       .toLowerCase()}-episode-${result.episodeNumber}`;

//     const recentEpisode =
//       result.episodeId === "undefined" ? newEpisodeId : result.episodeId;

//     return `/watch/${result.id}/${recentEpisode}`;
//   } else {
//     const providerId = getProviderId(result);
//     const tmdbParams =
//       typeof result.title !== "object"
//         ? `&tmdbParams=${
//             result.name || result.type === "TV Series" ? "tv" : "movie"
//           }`
//         : "";

//     const infoPath = isNaN(parseInt(result.id))
//       ? result.id //anime/manga
//       : `${result.id}?providerId=${providerId}${tmdbParams}`; //movie/movie-series

//     return `/info/${infoPath}`;
//   }
// }

// export function providerUrl(providerId, id, params) {
//   if (providerId) {
//     return `/meta/${
//       providerId === "tmdb"
//         ? "tmdb"
//         : providerId === "anilist"
//         ? "anilist"
//         : "anilist-manga"
//     }/info/${id}${params}`;
//   } else {
//     return `/anime/gogoanime/info/${id}`;
//   }
// }

export default function infoUrl(infoData) {
  //anime watch url route
  if (infoData.episodeId || infoData.episodeTitle) {
    // const newEpisodeId = `${infoData.title?.romaji
    //   ?.replace(/[-:. \s]+/g, "-")
    //   .replace(/^-+|-+$/g, "")
    //   .toLowerCase()}-episode-${infoData.episodeNumber}`;

    // const recentEpisode =
    //   infoData.episodeId === "undefined" ? newEpisodeId : infoData.episodeId;

    return `/watch/${infoData.id}${infoData.episodeId}`;
  } else if (infoData) {
    return `/info/${infoData.id}?type=${watchType(infoData)}`;
  }

  //movies and tv series info url route
}
