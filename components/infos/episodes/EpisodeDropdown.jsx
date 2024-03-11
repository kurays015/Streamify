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
import { useRouter } from "next/navigation";

export function EpisodeDropdown({ info }) {
  const { episodes } = React.useMemo(() => info, [info]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const router = useRouter();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between text-white hover:text-white"
        >
          {value
            ? `Episode ${
                episodes.find(episode => episode.id === value)?.number
              }`
            : "Select episode..."}
          <PiCaretUpDownThin className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] max-h-96 overflow-auto p-0 text-white">
        <Command>
          <CommandInput placeholder="Search episode..." className="h-9" />
          <CommandEmpty>No episode found.</CommandEmpty>
          <CommandGroup>
            {episodes.map(episode => (
              <CommandItem
                className="cursor-pointer hover:bg-slate-600"
                key={episode.id}
                value={episode.id}
                onSelect={currentValue => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                  router.push(`/watch/${episode.id}`);
                }}
              >
                Episode {episode.number}
                <GiCheckMark
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === episode.id ? "opacity-100" : "opacity-0"
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
