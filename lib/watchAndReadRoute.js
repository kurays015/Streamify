export function watchEpisodes(episodeId, id) {
  if (typeof episodeId !== "object" && typeof episodeId === "string") {
    return `/watch/${id}/${episodeId}`;
  }
}

export function watchAndReadButton(info, id) {
  if (info.type === "TV Series" || info.type === "Movie") {
    return `/embedded/${id}?type=${info.type}&title=${info.title}`;
  } else if (info.type === "TV") {
    return `/watch/${info.id}/${info.episodes[0]?.id}`;
  } else {
    return `/read/${info.id}?chapterId=${info.chapters[0]?.id}`;
  }
}
