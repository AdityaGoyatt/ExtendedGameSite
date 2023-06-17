import { useQuery } from "@tanstack/react-query";
import platformsData from "./platformsData";
import useApiFetch from "./useApiFetch";

export interface PlatformListItem {
  id: number;
  name: string;
  slug: string;
}

const { getAll } = new useApiFetch<PlatformListItem>("/platforms");
export default () =>
  useQuery<PlatformListItem[], Error>({
    queryKey: ["platforms"],
    queryFn: getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platformsData,
  });
