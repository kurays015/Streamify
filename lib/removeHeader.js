export default function removeHeader(pathname) {
  if (
    pathname.startsWith("/info") ||
    pathname.startsWith("/watch") ||
    pathname.startsWith("/signin") ||
    pathname.startsWith("/register") ||
    pathname.startsWith("/embedded")
  ) {
    return "hidden";
  } else {
    return "";
  }
}
