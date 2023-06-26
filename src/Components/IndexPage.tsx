import React from "react";
import NavBAr from "./NavBar";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import GenreMainList from "./GenreMainList";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";
import { Outlet } from "react-router-dom";

const IndexPage = () => {
  return (
    <>
      <NavBAr />
      <Outlet />
    </>
  );
};

export default IndexPage;
