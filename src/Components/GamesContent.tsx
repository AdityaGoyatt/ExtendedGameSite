import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";

import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import GenreMainList from "./GenreMainList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

const GamesContentPage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem p="2" area="aside" paddingX={5}>
          <GenreMainList />
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <Box>
          <GameHeading />
          <HStack spacing={5} paddingX={5} marginBottom={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default GamesContentPage;
