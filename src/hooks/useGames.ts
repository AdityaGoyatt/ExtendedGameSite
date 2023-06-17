import { useQuery } from "@tanstack/react-query";
import { genre } from "./useGenre";
import { gameQuery } from "../App";
import { PlatformListItem } from "./usePlatforms";
import useApiFetch from "./useApiFetch";

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: PlatformListItem }[];
  metacritic: number;
  genres: Array<genre>;
  rating_top: number;
}
const { getAll } = new useApiFetch<game>("/games");
const useGame = (gameQuery: gameQuery) =>
  useQuery<game[], Error>({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: () =>
      getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),

    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGame;
