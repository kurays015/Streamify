export default function watchUrl(infoData) {
  if (infoData.type === "Movie" || infoData.type === "TV Series") {
    const watchPath = infoData.id.split("/");
    return `/watch/${watchPath[0]}/${watchPath[1]}`;
  } else if (typeof infoData !== "object" && typeof infoData === "string") {
    return `/watch/anime/${infoData}`;
  } else {
    return `/read/${infoData.id}`;
  }
}
