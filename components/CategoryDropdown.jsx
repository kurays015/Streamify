import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { CgScreen } from "react-icons/cg";
import Categories from "./Categories";

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
        <Categories />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
