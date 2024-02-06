export default function ratingHandler(rating) {
  if (rating.comick || rating.anilist || rating.kitsu) {
    return rating.comick || rating.anilist || rating.kitsu;
  } else {
    return rating;
  }
}
