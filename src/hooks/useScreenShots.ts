import { Image } from "@chakra-ui/react";
import useApiFetch from "./useApiFetch";
import { useQuery } from "@tanstack/react-query";
interface ScreenShot {
  id: number;
  image: string;
}

const useScreenShots = (id: string) => {
  const { getAll } = new useApiFetch<ScreenShot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["ScreenShots", id],
    queryFn: getAll,
  });
};

export default useScreenShots;
