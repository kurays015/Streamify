import { useRouter } from "next/navigation";

export default function useSearch(pathname, queryParams) {
  const router = useRouter();
  return function handleSearch(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const searchQuery = formData.get(pathname);
    const params = categories(pathname, searchQuery, queryParams);
    if (!searchQuery) return;
    router.push(params);
  };
}

function categories(pathname, searchQuery, queryParams) {
  if (pathname === "/lightnovel") {
    return `?title=${searchQuery}`;
  } else if (pathname === "/search") {
    return `?query=${searchQuery}&searchType=${queryParams && queryParams}`;
  }
}
