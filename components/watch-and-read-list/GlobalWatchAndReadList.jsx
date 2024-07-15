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

export function GlobalWatchAndReadList() {
  const [open, setOpen] = useState(false);
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
        <div className="grid grid-cols-2 gap-2">
          <List />
        </div>
      </SheetContent>
    </Sheet>
  );
}
