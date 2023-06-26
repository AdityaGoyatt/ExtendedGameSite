import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useNameStore from "./storeNames";
import useGameQuery from "./storeQuery";

const PlatformSelector = () => {
  const { headingNames, setPlatformName } = useNameStore();
  const { setPlatformId } = useGameQuery();
  const { data: dataList, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {headingNames.platformName || "Platform"}
      </MenuButton>
      <MenuList>
        {dataList?.map((platform) => (
          <MenuItem
            onClick={() => {
              setPlatformId(platform.id);
              setPlatformName(platform.name);
            }}
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
