import { useQuery } from "@tanstack/react-query";
import genreData from "./genreData";
import useHttp from "./useHttp";
import axios from "axios";
import apiClient from "./apiClient";

export interface genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
export interface DataResult<genre> {
  count: number;
  results: Array<genre>;
}

const fetchGenre = () =>
  apiClient.get<DataResult<genre>>("/genres").then((res) => res.data.results);

export default () =>
  useQuery<genre[], Error>({
    queryKey: ["genre"],
    queryFn: fetchGenre,
  });
