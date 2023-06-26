import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import React from "react";
import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import GenreMainList from "./GenreMainList";
import NavBAr from "./NavBar";
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
};

export default GamesContentPage;
