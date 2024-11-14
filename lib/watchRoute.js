import watchType from "./watchType";

export function watchRoute(info) {
  if (typeof info.title !== "object" || info.name) {
    const title = info.title ? info.title : info.name;

    return `/embedded/${title}/${info.id}?type=${watchType(info)}`;
  } else {
    return `/watch/${info.id}/${info.episodes[0]?.id}`;
  }
}
