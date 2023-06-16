import { useQuery } from "@tanstack/react-query";
import platformsData from "./platformsData";
import apiClient from "./apiClient";
import { FetchResult } from "./dataInterface";

export interface PlatformListItem {
  id: number;
  name: string;
  slug: string;
}

const fetchPlatforms = () =>
  apiClient
    .get<FetchResult<PlatformListItem>>("/platforms")
    .then((res) => res.data.results);
export default () =>
  useQuery<PlatformListItem[], Error>({
    queryKey: ["platforms"],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platformsData,
  });
