import { useQuery } from "@tanstack/react-query";
import genreData from "./genreData";
import apiClient from "./apiClient";

export interface genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface genreResult<genre> {
  count: number;
  results: Array<genre>;
}

const fetchGenre = () =>
  apiClient.get<genreResult<genre>>("/genres").then((res) => res.data.results);

export default () =>
  useQuery<genre[], Error>({
    queryKey: ["genre"],
    queryFn: fetchGenre,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genreData,
  });
