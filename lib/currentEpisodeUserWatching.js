export default function currentEpisodeUserWatching(info, episodeId) {
  return info.episodes.find(episode => episode.id === episodeId)?.number;
}
