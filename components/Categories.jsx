import { categories } from "@/lib/constants";
import { DropdownMenuCheckboxItem } from "./ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";

export default function Categories() {
  return (
    <>
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
            <Link href={name.toLowerCase()}>
              <span>{name}</span>
            </Link>
          </div>
        </DropdownMenuCheckboxItem>
      ))}
    </>
  );
}
