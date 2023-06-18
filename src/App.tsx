import { useEffect, useState } from "react";

import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";

import NavBAr from "./Components/NavBar";
import GenreMainList from "./Components/GenreMainList";
import { genre } from "./hooks/useGenre";
import PlatformSelector from "./Components/PlatformSelector";
import { PlatformListItem } from "./hooks/usePlatforms";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";
export interface gameQuery {
  genreId: number | undefined;
  platformID: number | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<gameQuery>({} as gameQuery);
  const [selectedProperties, setSelectedProperties] = useState({
    genreName: "",
    platformName: "",
  });
  return (
    <Grid
      templateAreas={{
        base: `"Nav" "main"`,
        lg: `"Nav Nav"
          "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem p="2" area="Nav">
        <NavBAr
          handleClick={(searchText) =>
            setGameQuery({ ...gameQuery, searchText: searchText })
          }
        />
      </GridItem>
      <Show above="lg">
        <GridItem p="2" area="aside" paddingX={5}>
          <GenreMainList
            handleClick={(genreId, genreName) => {
              setGameQuery({ ...gameQuery, genreId: genreId });
              setSelectedProperties({
                ...selectedProperties,
                genreName: genreName,
              });
            }}
            selectGenreId={gameQuery.genreId}
          />
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <Box paddingLeft={4}>
          <GameHeading name={selectedProperties} />
          <HStack spacing={5} paddingLeft={4} marginBottom={4}>
            <PlatformSelector
              selectedCurrentPlatformName={selectedProperties.platformName}
              handleClick={(platformId, platformName) => {
                setGameQuery({ ...gameQuery, platformID: platformId });
                setSelectedProperties({
                  ...selectedProperties,
                  platformName: platformName,
                });
              }}
            />
            <SortSelector
              currentOrder={gameQuery.sortOrder}
              handleClick={(value) =>
                setGameQuery({ ...gameQuery, sortOrder: value })
              }
            />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
