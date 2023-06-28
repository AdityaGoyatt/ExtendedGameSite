import { create } from "zustand";
interface NameStore {
  headingNames: {
    genreName?: string;
    platformName?: string;
  };

  setGenreName: (genreName: string) => void;
  setPlatformName: (platformName: string) => void;
}

const useNameStore = create<NameStore>((set) => ({
  headingNames: {},
  setGenreName: (selectedGenre) =>
    set((store) => ({
      headingNames: { ...store.headingNames, genreName: selectedGenre },
    })),
  setPlatformName: (selectedPlatform) =>
    set((store) => ({
      headingNames: { ...store.headingNames, platformName: selectedPlatform },
    })),
}));

export default useNameStore;
