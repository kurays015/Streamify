export default function removeElement(pathname) {
  if (pathname.startsWith("/info") || pathname.startsWith("/signin")) {
    return "hidden";
  } else {
    return "";
  }
}
