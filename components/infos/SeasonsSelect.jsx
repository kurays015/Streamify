"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

export default function SeasonsSelect({ info }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  return (
    <Select
      onValueChange={value => {
        params.set("season", value);
        router.push(`?${params.toString()}`, {
          scroll: false,
        });
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue
          placeholder={
            searchParams.get("season")
              ? `Season ${searchParams.get("season")}`
              : "Select a season"
          }
        />
      </SelectTrigger>
      <SelectContent
        ref={ref => {
          if (!ref) return;
          ref.ontouchstart = e => {
            e.preventDefault();
          };
        }}
      >
        {info.seasons.map(({ id, season_number }) => (
          <SelectItem key={id} value={season_number} className="cursor-pointer">
            Season {season_number}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
