import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaXbox,
  FaApple,
  FaPlaystation,
  FaWindows,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { PlatformListItem } from "../hooks/usePlatforms";
interface Props {
  platforms: PlatformListItem[];
}

const PlatformIcons = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    mac: FaApple,
    nintendo: SiNintendo,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    playstation: FaPlaystation,
    android: FaAndroid,
  };

  return (
    <HStack marginBottom="10px">
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          mr="5px"
          as={iconMap[platform.slug]}
          color="gray.500"
        />
      ))}
    </HStack>
  );
};

export default PlatformIcons;
