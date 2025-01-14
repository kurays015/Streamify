"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import List from "./List";
import { useState } from "react";
import { SlScreenDesktop } from "react-icons/sl";
import { useFavoriteStore } from "@/stores/favoriteStore";

export function GlobalWatchAndReadList() {
  const [open, setOpen] = useState(false);
  const favorites = useFavoriteStore(state => state.favorites);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          style={{
            all: "unset",
            position: "fixed",
            zIndex: 51,
            right: 2,
            cursor: "pointer",
          }}
        >
          <span
            className={`bg-red-500 text-white font-bold rounded-full w-4 text-xs text-center absolute -translate-x-1/2 -translate-y-2/3 top-1/2 left-1/2 ${
              open ? "hidden" : "block"
            }`}
          >
            {favorites.length}
          </span>
          <SlScreenDesktop
            className={`text-3xl text-slate-300 ${open ? "hidden" : "block"}`}
          />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-2">
        <SheetHeader>
          <SheetTitle className="text-white mb-3 text-center">
            Watch and Read List
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-2 max-h-[850px] overflow-auto">
          <List />
        </div>
      </SheetContent>
    </Sheet>
  );
}
