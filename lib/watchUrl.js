import titleHandler from "./titleHandler";

export default function watchUrl(infoData) {
  if (infoData.type === "Movie" || infoData.type === "TV Series") {
    const path = infoData.id.split("/");
    return `/watch/${path[0]}/${path[1]}`;
  } else if (typeof infoData !== "object" && typeof infoData === "string") {
    return `/watch/anime/${infoData}`;
  } else {
    return `/read/${infoData.type.toLowerCase()}/${titleHandler(
      infoData.title
    )}`;
  }
}
