import { useQuery } from "@tanstack/react-query";
import useHttp from "./useHttp";
import { genre } from "./useGenre";
import { gameQuery } from "../App";
import axios from "axios";
import apiClient from "./apiClient";
import { FetchResult } from "./dataInterface";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
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
