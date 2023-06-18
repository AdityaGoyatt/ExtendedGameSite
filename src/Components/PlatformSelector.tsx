import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { PlatformListItem } from "../hooks/usePlatforms";
interface Props {
  handleClick: (platformId: number, platformName: string) => void;
  selectedCurrentPlatformName: string | null;
}

const PlatformSelector = ({
  handleClick,
  selectedCurrentPlatformName,
}: Props) => {
  const { data: dataList, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedCurrentPlatformName || "Platform"}
      </MenuButton>
      <MenuList>
        {dataList?.map((platform) => (
          <MenuItem
            onClick={() => handleClick(platform.id, platform.name)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
