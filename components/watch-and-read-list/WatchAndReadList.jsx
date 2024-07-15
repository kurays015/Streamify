import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import List from "./List";

export default function WatchAndReadList() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <BsFillBookmarkCheckFill className="text-3xl mr-1" />
          Show lists
        </Button>
      </SheetTrigger>
      <SheetContent className="p-3 overflow-auto">
        <SheetHeader>
          <SheetTitle className="text-white mb-3 text-center">
            Watch and Read Lists
          </SheetTitle>
        </SheetHeader>
        <div className="grid grid-cols-2 gap-4">
          <List />
        </div>
      </SheetContent>
    </Sheet>
  );
}
