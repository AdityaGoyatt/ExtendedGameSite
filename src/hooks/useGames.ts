import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import { genre } from "./useGenre";
import { gameQuery } from "../Components/storeQuery";
import apiClient from "./apiClient";
import { PlatformListItem } from "./usePlatforms";
import { DataResult } from "./useApiFetch";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformListItem }[];
  metacritic: number;
  genres: Array<genre>;
  rating_top: number;
  slug: string;
}

const useGame = (gameQuery: gameQuery) =>
  useInfiniteQuery<DataResult<game>, Error>({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<DataResult<game>>("/games", {
          params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformID,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),

    staleTime: 24 * 60 * 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
export default useGame;
