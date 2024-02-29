export default function getProviderId(result) {
  if (
    result.type === "Movie" ||
    result.type === "TV Series" ||
    typeof result.title !== "object" ||
    result.name
  ) {
    return "tmdb";
  } else if (result.type === "TV") {
    return "anilist";
  } else {
    return "anilist-manga";
  }
}
