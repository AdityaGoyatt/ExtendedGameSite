import { genre } from "./../hooks/useGenre";

import { create } from "zustand";
export interface gameQuery {
  genreId?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}
interface QueryStore {
  gameQuery: gameQuery;
  setGenreId: (id: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (search: string) => void;
}

const useGameQuery = create<QueryStore>((set) => ({
  gameQuery: {},
  setGenreId: (gId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: gId } })),
  setPlatformId: (pId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID: pId } })),
  setSortOrder: (sortText) =>
    set((store) => ({
      gameQuery: { ...store.gameQuery, sortOrder: sortText },
    })),
  setSearchText: (search) =>
    set((store) => ({ gameQuery: { searchText: search } })),
}));

export default useGameQuery;
