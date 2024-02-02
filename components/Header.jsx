import { CategoryDropdown } from "./CategoryDropdown";
import { LuPopcorn } from "react-icons/lu";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white py-8 px-2 max-w-7xl mx-auto">
      <div className="flex items-center gap-1">
        <LuPopcorn className="text-4xl text-red-500" />
        <h1 className="uppercase font-bold text-xl text-teal-500  ">
          Streamify
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <CategoryDropdown />
          </li>
        </ul>
      </nav>
    </header>
  );
}
// bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500