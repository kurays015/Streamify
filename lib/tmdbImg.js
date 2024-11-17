import { placeholder } from "./placeholderImg";

export default function tmdbImgHandler(path) {
  return path ? `https://image.tmdb.org/t/p/original/${path}` : placeholder;
}
