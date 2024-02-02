export default function titleHandler(title) {
  if (typeof title === "object") {
    return title.romaji ? title.romaji : title.english || title.userPreferred;
  } else {
    return title;
  }
}
