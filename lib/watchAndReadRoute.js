export default function watchAndReadRoute(info) {
  if (info?.type === "Movie" || info?.type === "TV Series") {
    const watchPath = info?.id.split("/");
    return `/watch/${watchPath[0]}/${watchPath[1]}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/anime/${info}`;
  } else {
    return `/read/${info?.id}`;
  }
}
