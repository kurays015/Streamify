"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchResultPagination({ result }) {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  const [page, setPage] = useState(currentPage);
  const router = useRouter();
  const totalPages = result.total_pages || result.totalPages;

  const handlePageChange = newPage => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    router.push(`?${params.toString()}`);
    setPage(newPage);
  };
  const getDisplayedPages = () => {
    // Function to get the pages to be displayed
    // Example: if page is 3, startPage will be 1 (Math.max(1, 3 - 2))
    // Example: if page is 5, startPage will be 3 (Math.max(1, 5 - 2))
    const startPage = Math.max(1, page - 2);

    // Example: if startPage is 1 and totalPages is 5, endPage will be 4 (Math.min(5, 1 + 4))
    // Example: if startPage is 3 and totalPages is 10, endPage will be 6 (Math.min(10, 3 + 4))
    const endPage = Math.min(totalPages, startPage + 4);

    //getting only the pages that are between startPage and endPage, 5 elements of the array only
    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  return (
    <Pagination>
      <PaginationContent className="flex flex-wrap justify-center items-center gap-2 lg:gap-4 pt-10 pb-10">
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              onClick={() => handlePageChange(Math.max(1, page - 1))}
              disabled={page === 1}
            />
          </PaginationItem>
        )}

        {getDisplayedPages().map(displayedPage => (
          <PaginationItem key={displayedPage}>
            <PaginationLink
              className={`cursor-pointer text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 rounded-md ${
                page === displayedPage ? "bg-blue-500" : "hover:border"
              }`}
              isActive={page === displayedPage}
              onClick={() => handlePageChange(displayedPage)}
            >
              {displayedPage}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 5 && page < totalPages - 2 && (
          <PaginationItem>
            <PaginationEllipsis className="text-sm sm:text-base lg:text-lg" />
          </PaginationItem>
        )}

        {totalPages > 5 && page < totalPages && (
          <PaginationItem>
            <PaginationLink
              className={`text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 rounded-md ${
                page === totalPages
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
              }`}
              onClick={() => handlePageChange(totalPages)}
              isActive={page === totalPages}
            >
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}

        {page < totalPages && (
          <PaginationItem>
            <PaginationNext
              onClick={() => handlePageChange(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
