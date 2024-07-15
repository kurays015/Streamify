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
              { id: info.id, image: info.image ? info.image : info.thumbnail },
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
