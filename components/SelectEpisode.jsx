"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import titleHandler from "@/lib/titleHandler";

export default function SelectEpisode({ infoData }) {
  const content = infoData.episodes
    ? infoData.episodes
    : infoData.chapters.data[0].chapters;
  return (
    <Select>
      <SelectTrigger className="w-[180px] text-white">
        <SelectValue
          placeholder={infoData.episodes ? "Episodes" : "Chapters"}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {content.map(({ id, number, title }, index) => (
            <SelectItem
              value={id}
              key={id}
              className=" focus:bg-slate-800 focus:text-slate-200 cursor-pointer"
            >
              {index + 1}. {titleHandler(title)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
