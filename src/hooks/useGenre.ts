import { useQuery } from "@tanstack/react-query";
import genreData from "./genreData";
import useApiFetch from "./useApiFetch";

export interface genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const { getAll } = new useApiFetch<genre>("/genres");
export default () =>
  useQuery<genre[], Error>({
    queryKey: ["genre"],
    queryFn: getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genreData,
  });
