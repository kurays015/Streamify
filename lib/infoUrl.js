export default function infoUrl(result) {
  if (result.type === "Movie" || result.type === "TV Series") {
    const url = result.id.split("/");
    return `/${url[0]}/${url[1]}`;
  } else if (typeof result !== "object") {
    const url = result.split("/");
    return `/${url[0]}/${url[1]}`;
  } else {
    return `/info/${result.id}`;
  }
}

export function fetchInfo(id) {
  if (id.toString().length <= 6) {
    return process.env.META_URL;
  } else if (id.toString().length === 36) {
    return process.env.ANIFY_URL;
  } else {
    return process.env.GOGO_ANIME_URL;
  }
}

// export function watchUrl(id) {
//   const idNumber = id.match(/\d+/)[0];
//   const url = id.split("/");
//   return `/watch/${url[0]}/${idNumber}`;
// }
