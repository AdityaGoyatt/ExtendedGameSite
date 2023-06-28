import { useQuery } from "@tanstack/react-query";
import useApiFetch from "./useApiFetch";
import { game } from "./useGames";

const { get } = new useApiFetch<game>("/games");

const useGameDetails = (id: string) =>
  useQuery<game, Error>({
    queryKey: ["gameData", id],
    queryFn: () => get(id),
  });

export default useGameDetails;
