"use client";
import { useFavoriteStore } from "@/stores/favoriteStore";
import { Button } from "../ui/button";
import { FaPlus } from "react-icons/fa6";
import WatchAndReadList from "../watch-list/WatchAndReadList";

export default function AddToList({ info }) {
  const addToFavorite = useFavoriteStore(state => state.addToFavorite);
  const isFavorite = useFavoriteStore(state => state.isFavorite(info.id));

  return (
    <>
      {isFavorite ? (
        <WatchAndReadList />
      ) : (
        <Button
          onClick={() => addToFavorite(info)}
          variant="outline"
          className="text-white text-base font-semibold py-6 px-12 hover:text-white hover:scale-105 transition-all customSm:w-full md:w-auto"
        >
          <FaPlus className="mr-1" />
          {info.chapters ? "Add to Readlist" : "Add to Watchlist"}
        </Button>
      )}
    </>
  );
}
