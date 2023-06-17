import { useQuery } from "@tanstack/react-query";
import { genre } from "./useGenre";
import { gameQuery } from "../App";
import apiClient from "./apiClient";
import { FetchResult } from "./dataInterface";
import { PlatformListItem } from "./usePlatforms";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformListItem }[];
  metacritic: number;
  genres: Array<genre>;
  rating_top: number;
}

const useGame = (gameQuery: gameQuery) =>
  useQuery<game[], Error>({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: () =>
      apiClient
        .get<FetchResult<game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data.results),

    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGame;
