"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/lib/redux-toolkit/hooks";
import Card from "../Card";
import Link from "next/link";
import infoUrl from "@/lib/infoUrl";
import removeElement from "@/lib/removeElement";
import { usePathname } from "next/navigation";
import { PiTagSimpleFill } from "react-icons/pi";
import List from "./List";
import useLocalStorage from "@/hooks/useLocalStorage";

export function GlobalWatchAndReadList() {
  const lists = useAppSelector(state => state.lists.value);
  const [list, _] = useLocalStorage("watchAndReadList", lists);

  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          style={{ all: "unset" }}
          className={`text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto cursor-pointer ${removeElement(
            pathname
          )}`}
        >
          <PiTagSimpleFill className="text-3xl text-slate-300 absolute top-0 right-0 z-50 cursor-pointer" />
        </Button>
      </SheetTrigger>
      <SheetContent className="p-2">
        <SheetHeader>
          <SheetTitle className="text-white mb-3 text-center">
            Watch and Read Lists
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-2">
          {lists.length > 0 ? (
            <List lists={list} />
          ) : (
            <h1 className="text-slate-300 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              No lists at the moment.
            </h1>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
