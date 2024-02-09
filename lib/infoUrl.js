export default function infoUrl(result) {
  if (result.type === "Movie" || result.type === "TV Series") {
    const url = result.id.split("/");
    return `/movie-series/${url[0]}/${url[1]}`;
  } else if (result.episodeId) {
    return `/watch/anime/${result.episodeId}`;
  } else {
    return `/info/${result.id}`;
  }
}

//incaseNeeded*(infoUrl)*
// else if (typeof result !== "object") {
//   const url = result.split("/");
//   return `/${url[0]}/${url[1]}`;
// }
