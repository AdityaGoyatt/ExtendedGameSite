import { useQuery } from "@tanstack/react-query";
import useApiFetch from "./useApiFetch";
import apiClient from "./apiClient";

interface gameData {
  rating: number;
  description_raw: string;
  name: string;
}

const { get } = new useApiFetch<gameData>("/games");

const useGameDetails = (id: string) =>
  useQuery<gameData, Error>({
    queryKey: ["gameData"],
    queryFn: () => get(id),
  });

export default useGameDetails;
