import { HStack, Image } from "@chakra-ui/react";

import logo from "./images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const NavBAr = () => {
  return (
    <HStack p={2} justifyContent="space-between">
      <Link to={"/"}>
        <Image src={logo} boxSize="60px"></Image>
      </Link>
      <SearchBar />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBAr;
