import titleHandler from "./titleHandler";

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

export function watchUrl(infoData) {
  if (infoData.type === "Movie" || infoData.type === "TV Series") {
    const path = infoData.id.split("/");
    return `/watch/${path[0]}/${path[1]}`;
  } else if (infoData.type === "TV") {
    return `/watch/anime/${infoData.id}`;
  } else {
    return `/read/${infoData.type.toLowerCase()}/${titleHandler(
      infoData.title
    )}`;
  }
}
