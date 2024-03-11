export default function removeHeader(pathname) {
  if (
    pathname.startsWith("/info") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register")
  ) {
    return "hidden";
  } else {
    return "";
  }
}
