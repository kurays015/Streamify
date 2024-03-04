export function watchEpisodes(info, episode) {
  if (info.type === "TV Series") {
    return `/watch/${episode?.id}/?showId=${info.id}&type=${info.type}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/${info}`;
  }
}

export function watchAndReadButton(info) {
  if (info.type === "TV Series" || info.type === "Movie") {
    return `/watch/${
      info.episodeId ? info.episodeId : info?.seasons[0]?.episodes[0].id
    }?showId=${info.id}&type=${info.type}`;
  } else if (info.type === "TV") {
    return `/watch/${info.episodes[0]?.id}`;
  } else {
    return `/read/${info.id}`;
  }
}
