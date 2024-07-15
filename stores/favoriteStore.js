import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useFavoriteStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      isFavorite: id => get().favorites.some(favorite => favorite.id === id),
      addToFavorite: (info, id) =>
        set(state => {
          const isAlreadyExist = state.favorites.some(item => item.id === id);

          if (isAlreadyExist) return {};

          return {
            favorites: [
              ...state.favorites,
              {
                id,
                title: info.title,
                image: info.image ? info.image : info.thumbnail,
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
