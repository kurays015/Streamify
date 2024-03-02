export function watchEpisodes(info, episode) {
  if (info.type === "Movie" || info.type === "TV Series") {
    return `/watch/${info.episodeId ? info.episodeId : episode?.id}/?showId=${
      info.id
    }&type=${info.type}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/${info}`;
  } else {
    return `/read/${info.id}`;
  }
}

// console.log(info.seasons[0].episodes[0]);
