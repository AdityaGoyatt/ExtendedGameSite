import { useQuery } from "@tanstack/react-query";
import platformsData from "./platformsData";
import apiClient from "./apiClient";

export interface PlatformListItem {
  id: number;
  name: string;
  slug: string;
}
interface PlatformResults {
  count: number;
  results: Array<PlatformListItem>;
}
const fetchPlatforms = () =>
  apiClient.get<PlatformResults>("/platforms").then((res) => res.data.results);
export default () =>
  useQuery<PlatformListItem[], Error>({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<PlatformResults>("/platforms")
        .then((res) => res.data.results),
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platformsData,
  });
