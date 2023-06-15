import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { PlatformListItem } from "../hooks/usePlatforms";
interface Props {
  handleClick: (platform: PlatformListItem) => void;
  selectedCurrentPlatform: PlatformListItem | null;
}

const PlatformSelector = ({ handleClick, selectedCurrentPlatform }: Props) => {
  const { dataList, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCurrentPlatform?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {dataList.map((platform) => (
          <MenuItem onClick={() => handleClick(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
