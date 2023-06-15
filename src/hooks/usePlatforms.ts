import platformsData from "./platformsData";
import useHttp from "./useHttp";

export interface PlatformListItem {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () => ({
  dataList: platformsData,
  loading: false,
  error: null,
});

export default usePlatforms;
