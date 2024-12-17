"use client";
import { FaCircleXmark } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export default function SearchBadges({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  const router = useRouter();

  return (
    <div className="flex flex-wrap gap-4">
      {Object.entries(searchParams).map(([key, value]) => (
        <div className="relative" key={value}>
          <span
            className="absolute -top-1 -right-2 cursor-pointer"
            onClick={() => {
              params.delete(key);
              router.push(`?${params.toString()}`);
            }}
          >
            <FaCircleXmark />
          </span>
          <Badge className="bg-blue-500">
            {value === searchParams?.genres ? JSON.parse(value) : value}
          </Badge>
        </div>
      ))}
    </div>
  );
}
