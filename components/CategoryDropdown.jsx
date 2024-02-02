"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categories } from "@/lib/constants";
import Image from "next/image";
import { CgScreen } from "react-icons/cg";

export function CategoryDropdown() {
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="focus-visible:ring-0 focus-visible:ring-offset-0 "
        >
          <CgScreen className="text-3xl" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44 bg-[#1C1921] border-gray-700 text-white">
        <DropdownMenuLabel className="text-center">
          Select Category
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {categories.map(({ name, icon }) => (
          <DropdownMenuCheckboxItem
            key={name}
            className="cursor-pointer hover:bg-emerald-700"
          >
            <div className="flex items-center gap-2">
              {name === "Anime" ? (
                <Image src={icon} alt="Anime" width={25} height={25} />
              ) : (
                <span className="text-2xl">{icon}</span>
              )}
              <span>{name}</span>
            </div>
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
