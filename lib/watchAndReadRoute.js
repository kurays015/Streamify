export default function watchAndReadRoute(info, episode, pathname) {
  if (pathname && pathname.startsWith("/embedded")) {
    return `/embedded?type=${info.type}&season=${episode.season}&episode=${
      episode.episode
    }&title=${info.name ? info.name : info.title}`;
  } else if (info.type === "Movie" || info.type === "TV Series") {
    return `/watch/${info.episodeId ? info.episodeId : episode?.id}/?showId=${
      info.id
    }&type=${info.type}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/${info}`;
  } else {
    return `/read/${info.id}`;
  }
}
