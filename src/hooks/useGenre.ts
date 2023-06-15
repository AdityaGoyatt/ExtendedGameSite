import genreData from "./genreData";

export interface genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useGenre = () => ({ dataList: genreData, loading: false, error: null });

export default useGenre;
