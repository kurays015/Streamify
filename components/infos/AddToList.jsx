"use client";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";

export default function AddToList({ info, id }) {
  return (
    <>
      <Button
        // onClick={handleAddToList}
        variant="outline"
        className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto"
      >
        <FaPlus className="mr-1" />
        {info.chapters ? "Add to Readlist" : "Add to Watchlist"}
      </Button>
    </>
  );
}
