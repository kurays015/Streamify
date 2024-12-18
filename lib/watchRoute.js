export function watchRoute(info) {
  if (typeof info.title !== "object" || info.name) {
    const type = info.seasons ? "tv" : "movie";
    const title = info.name ? info.name : info.title;

    return `/embedded/${title}/${type}/${info.id}`;
  } else {
    return `/watch/${info.id}/${info.episodes[0]?.id}`;
  }
}
