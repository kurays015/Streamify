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
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, startPage + 3);
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
              className={`text-sm sm:text-base lg:text-lg px-2 sm:px-3 py-1 rounded-md ${
                page === displayedPage
                  ? "bg-blue-500 text-white"
                  : "hover:bg-blue-100"
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
