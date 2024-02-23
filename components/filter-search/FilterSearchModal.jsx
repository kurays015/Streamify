import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { filters } from "@/lib/advance-search";
import { FaFilter } from "react-icons/fa";
import { useRouter } from "next/navigation";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useMetaContext } from "@/app/hooks/useMetaContext";

export default function FilterSearchModal() {
  const [open, setOpen] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const { params } = useMetaContext();
  const router = useRouter();

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-center">
        <Button>
          <FaFilter className="text-slate-300 cursor-pointer text-3xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl bg-[#1c1c1c] text-white">
        <DialogHeader>
          <DialogTitle className="text-center text-amber-300">
            Anime filter advance search
          </DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <form className="">
              {filters.map(filter => (
                <FilterOptions
                  key={filter.title}
                  {...filter}
                  params={params}
                  setIsRadioSelected={setIsRadioSelected}
                />
              ))}
            </form>
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={!isRadioSelected}
            type="submit"
            variant="outline"
            onClick={() => {
              setOpen(false);
              params.delete("query");
              router.push(`?${params}`);
            }}
          >
            Filter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
