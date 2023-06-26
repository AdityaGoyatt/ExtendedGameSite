import { genre } from "./../hooks/useGenre";

import { create } from "zustand";
interface gameQueryType {
  genreId?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}
interface QueryStore {
  gameQuery: gameQueryType;
  setGenreId: (id: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (order: string) => void;
  setSearchText: (search: string) => void;
}
const game = {
  genreId: undefined,
  platformID: undefined,
  sortOrder: undefined,
  searchText: undefined,
};

const useGameQuery = create<QueryStore>((set) => ({
  gameQuery: game,
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
