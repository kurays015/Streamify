export default function watchAndReadRoute(info) {
  if (
    info.type === "Movie" ||
    info.type === "TV Series" ||
    (typeof info === "string" && info.includes("/"))
  ) {
    const watchRoute =
      typeof info === "object" ? info.id.split("/") : info.split("/");
    return `/watch/${watchRoute[0]}/${watchRoute[1]}`;
  } else if (typeof info !== "object" && typeof info === "string") {
    return `/watch/anime/${info}`;
  } else {
    return `/read/${info.id}`;
  }
}
