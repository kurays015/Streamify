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

export default function FilterSearchModal() {
  const [open, setOpen] = useState(false);
  const [isRadioSelected, setIsRadioSelected] = useState(false);
  const [params, setParams] = useState(new URLSearchParams());
  const router = useRouter();

  function handleRadioChange(key, queryValue) {
    const updateParams = new URLSearchParams(params.toString());
    updateParams.set(key, queryValue);
    setParams(updateParams);
    setIsRadioSelected(true);
  }

  function handleFilter() {
    setOpen(false);
    router.push(`?${params}`);
  }

  function clearFilter() {
    setParams(new URLSearchParams());
    router.push(`?`);
    setIsRadioSelected(false);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild className="self-center">
        <Button onClick={() => setIsRadioSelected(false)}>
          <FaFilter className="text-slate-300 cursor-pointer text-3xl" />
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-700">
        <DialogHeader>
          <DialogTitle className="text-center text-amber-300 customSm:mt-2 customSemiMd:my-0">
            Anime filter advance search
          </DialogTitle>
        </DialogHeader>
        <div>
          <div>
            <form>
              {filters.map(filter => (
                <FilterOptions
                  key={filter.title}
                  {...filter}
                  handleRadioChange={handleRadioChange}
                />
              ))}
            </form>
          </div>
        </div>
        <Button
          onClick={clearFilter}
          className="font-semibold text-slate-300 tracking-wider text-center text-sm"
        >
          Clear filter
        </Button>
        <DialogFooter>
          <Button
            className="font-semibold text-white tracking-wider"
            disabled={!isRadioSelected}
            type="submit"
            variant="outline"
            onClick={handleFilter}
          >
            Filter
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
