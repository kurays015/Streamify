"use client";
import { Button } from "@/components/ui/button";
import { FaCircleXmark } from "react-icons/fa6";

export default function RemoveFilterSearchBadge({ params }) {
  return (
    // <div className="absolute top-0 right-0">
    //   <FaCircleXmark className="text-base" />
    // </div>
    <div>
      <Button onClick={() => params.set("tae", "mabaho")}>Add</Button>
      <Button>Remove</Button>
    </div>
  );
}
