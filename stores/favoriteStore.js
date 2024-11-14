import tmdbImgHandler from "@/lib/tmdbImg";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: id => get().favorites.some(favorite => favorite.id === id),
      addToFavorite: info =>
        set(state => {
          const isAlreadyExist = state.favorites.some(
            item => item.id === info.id
          );

          if (isAlreadyExist) return {};

          return {
            favorites: [
              ...state.favorites,
              {
                id: info.id,
                title: info.title,
                image: info.image
                  ? info.image
                  : tmdbImgHandler(info.poster_path),
                type: info.type,
              },
            ],
          };
        }),
      removeFromFavorite: id =>
        set(state => ({
          favorites: state.favorites.filter(item => item.id !== id),
        })),
    }),
    {
      name: "favorites",
    }
  )
);
