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
import React, { useState } from "react";
import ReusableSelect from "@/components/ReusableSelect";

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
                <React.Fragment key={filter.title}>
                  {filter.title !== "Year" && (
                    <FilterOptions
                      {...filter}
                      handleRadioChange={handleRadioChange}
                    />
                  )}
                </React.Fragment>
              ))}
              {/* <h3 className=" font-semibold text-emerald-400 customSm:text-base lg:text-lg">
                Year
              </h3>
              <ReusableSelect info={filters[0].options} /> */}
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
