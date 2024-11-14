import tmdbImgHandler from "./tmdbImg";

export default function coverImg(info) {
  return info.cover ? info.cover : tmdbImgHandler(info.poster_path);
}
