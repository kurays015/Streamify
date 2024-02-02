export default function infoUrl(result) {
  if (result.type === "Movie" || result.type === "TV Series") {
    const url = result.id.split("/");
    return `/${url[0]}/${url[1]}`;
  } else {
    return `/info/${result.id}`;
  }
}
