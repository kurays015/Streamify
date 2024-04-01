export default function removeHeader(pathname) {
  if (
    pathname.startsWith("/info") ||
    pathname.startsWith("/category-info") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/news-info") ||
    pathname.startsWith("/lightnovel-info")
  ) {
    return "hidden";
  } else {
    return "";
  }
}
