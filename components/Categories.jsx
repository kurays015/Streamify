import { categories } from "@/lib/constants";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import Link from "next/link";

export default function Categories() {
  return (
    <>
      {categories.map(category => (
        <Link href={`/${category.toLowerCase()}`} key={category}>
          <DropdownMenuCheckboxItem className="cursor-pointer hover:bg-emerald-700">
            {category}
          </DropdownMenuCheckboxItem>
        </Link>
      ))}
    </>
  );
}
