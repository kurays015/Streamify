"use client";
import * as React from "react";
import { PiCaretUpDownThin } from "react-icons/pi";
import { GiCheckMark } from "react-icons/gi";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { usePathname, useRouter } from "next/navigation";
import comboBoxHeader from "@/lib/comboBoxHeader";
import useSessionStorage from "@/hooks/useSessionStorage";

export default function EpisodeDropdown({ info, currentEpisodeIndex }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useSessionStorage("epiChap", null);
  const router = useRouter();
  const pathname = usePathname();
  const episodesOrChapters = info.episodes ? info.episodes : info.chapters;
  const content = info.episodes ? "Episodes" : "Chapters";

  const episodes = React.useMemo(() => {
    return episodesOrChapters.find(episode => episode.id === value)?.number;
  }, [value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="customSm:w-full customSemiMd2:w-auto justify-between text-white hover:text-white "
        >
          <p className="text-ellipsis overflow-hidden whitespace-nowrap w-full">
            {comboBoxHeader(
              value,
              info,
              pathname,
              episodes,
              currentEpisodeIndex,
              content,
              episodesOrChapters
            )}
          </p>
          <PiCaretUpDownThin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[200px] max-h-44 overflow-auto p-0 text-white"
        side="bottom"
      >
        <Command>
          <CommandInput placeholder={`Search ${content}...`} className="h-9" />
          <CommandEmpty>No episode found.</CommandEmpty>
          <CommandGroup>
            {episodesOrChapters.map(episodesOrChapter => (
              <CommandItem
                className="cursor-pointer hover:bg-gray-300"
                key={episodesOrChapter.id}
                value={episodesOrChapter.id}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  router.push(
                    info.episodes
                      ? `/watch/${info.id}/${episodesOrChapter.id}`
                      : `/read/${info.id}?chapterId=${episodesOrChapter.id}`
                  );
                }}
              >
                {info.episodes
                  ? `Episode ${episodesOrChapter.number}`
                  : episodesOrChapter.title}
                <GiCheckMark
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === episodesOrChapter.id ? "opacity-100" : "opacity-0"
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
