export default function fetchInfo(id) {
  if (id.toString().length === 36) {
    return process.env.ANIFY_URL;
  } else {
    return process.env.META_URL;
  }
}