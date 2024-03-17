export default function handleCategorySearch(e, pathname) {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);
  const searchQuery = formData.get(pathname);
  const params = categories(pathname, searchQuery);
  if (!searchQuery) return;
  router.push(params);
}

function categories(pathname, searchQuery) {
  if (pathname === "/lightnovel") {
    return `?title=${searchQuery}`;
  }
}
