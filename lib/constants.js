import { PiFilmSlateBold } from "react-icons/pi";
import { FcNews } from "react-icons/fc";
import { CgReadme } from "react-icons/cg";
import { FaBookOpenReader } from "react-icons/fa6";
import { RiBookReadFill } from "react-icons/ri";
import { MOVIES } from "@consumet/extensions";

import onepiece from "@/public/onepiece.png";

export const categories = [
  { name: "Anime", icon: onepiece },
  { name: "Manga", icon: <CgReadme className="text-blue-500" /> },
  { name: "Manhwa", icon: <RiBookReadFill className="text-red-500" /> },
  { name: "Manhua", icon: <FaBookOpenReader className="text-teal-500" /> },
  { name: "Movies", icon: <PiFilmSlateBold className="text-emerald-500" /> },
  { name: "News", icon: <FcNews /> },
];

export const movies = MOVIES;
