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
import { useEpisodeStore } from "@/stores/episodeStore";

export default function EpisodeDropdown({ info, currentEpisodeIndex }) {
  const [open, setOpen] = React.useState(false);
  const value = useEpisodeStore(state => state.value);
  const setValue = useEpisodeStore(state => state.setValue);

  const router = useRouter();
  const pathname = usePathname();

  const episodeNumber = React.useMemo(() => {
    return info.episodes.find(episode => episode.id === value)?.number;
  }, [value, info.episodes]);

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
              episodeNumber,
              currentEpisodeIndex,
              info.episodes
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
          <CommandInput placeholder={`Search Episodes...`} className="h-9" />
          <CommandEmpty>No episode found.</CommandEmpty>
          <CommandGroup>
            {info.episodes.map(episode => {
              const watchPath = pathname.startsWith("/embedded")
                ? `/embedded?id=${info.id}&episodeId=${episode.id}`
                : `/watch/${info.id}/${episode.id}`;

              return (
                <CommandItem
                  className="cursor-pointer hover:bg-gray-300"
                  key={episode.id}
                  value={episode.id}
                  onSelect={currentValue => {
                    setValue(currentValue);
                    setOpen(false);
                    router.push(watchPath);
                  }}
                >
                  {info.episodes ? `Episode ${episode.number}` : episode.title}{" "}
                  <GiCheckMark
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === episode.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
