import infoUrl from "@/lib/infoUrl";
import { useFavoriteStore } from "@/stores/favoriteStore";
import Link from "next/link";
import Card from "../Card";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function List() {
  const favorites = useFavoriteStore(state => state.favorites);
  const removeFromFavorites = useFavoriteStore(
    state => state.removeFromFavorite
  );

  return (
    <>
      {favorites.length > 0 ? (
        favorites.map(favorite => (
          <div className="relative" key={favorite.id}>
            <FaRegCircleXmark
              className="absolute top-1 right-1 z-50 text-2xl text-slate-400 cursor-pointer"
              onClick={() => removeFromFavorites(favorite.id)}
            />
            <Link href={infoUrl(favorite)}>
              <Card {...favorite} list={true} />
            </Link>
          </div>
        ))
      ) : (
        <h1 className="text-slate-300 text-center text-sm absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          No list added at the moment.
        </h1>
      )}
    </>
  );
}
