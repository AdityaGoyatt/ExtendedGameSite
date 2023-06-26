import { useEffect, useState } from "react";

import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react";
import GameGrid from "./Components/GameGrid";

import NavBAr from "./Components/NavBar";
import GenreMainList from "./Components/GenreMainList";
import PlatformSelector from "./Components/PlatformSelector";
import SortSelector from "./Components/SortSelector";
import GameHeading from "./Components/GameHeading";
function App() {
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
        <NavBAr />
      </GridItem>
      <Show above="lg">
        <GridItem p="2" area="aside" paddingX={5}>
          <GenreMainList />
        </GridItem>
      </Show>

      <GridItem p="2" area="main">
        <Box paddingLeft={4}>
          <GameHeading />
          <HStack spacing={5} paddingLeft={4} marginBottom={4}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
          <GameGrid />
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
