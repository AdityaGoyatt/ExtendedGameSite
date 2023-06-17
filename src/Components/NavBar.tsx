import { HStack, Image } from "@chakra-ui/react";

import logo from "./images/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchBar from "./SearchBar";

interface Props {
  handleClick: (searchText: string) => void;
}

interface Props {}
const NavBAr = ({ handleClick }: Props) => {
  return (
    <HStack p={2} justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBar handleClick={(searchText) => handleClick(searchText)} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBAr;
