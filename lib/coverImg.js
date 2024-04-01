export default function coverImg(info) {
  if (info.cover) {
    return info.cover;
  } else if (info.image) {
    return info.image;
  } else {
    return info?.thumbnail;
  }
}
