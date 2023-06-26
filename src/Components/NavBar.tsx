import { HStack, Image } from "@chakra-ui/react";

import logo from "./images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

const NavBAr = () => {
  return (
    <HStack p={2} justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBAr;
