export function watchEpisodes(info, episode) {
  if (info.type === "TV Series") {
    return `/watch/${episode?.id}/?showId=${info.id}&type=${info.type}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/${info}`;
  }
}

export function watchAndReadButton(info, id) {
  if (info.type === "TV Series" || info.type === "Movie") {
    return `/embedded/${id}?type=${info.type}&title=${info.title}`;
  } else if (info.type === "TV") {
    return `/watch/${info.episodes[0]?.id}`;
  } else {
    return `/read/${info.id}`;
  }
}
