import React from "react";
import useScreenShots from "../hooks/useScreenShots";
import { SimpleGrid, Image } from "@chakra-ui/react";
import Skeletons from "./Skeletons";
interface Props {
  gameId: string;
}
const SShots = ({ gameId }: Props) => {
  const { data, isLoading } = useScreenShots(gameId);
  if (isLoading) <Skeletons />;
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }}>
      {data?.map((screen) => (
        <Image
          padding={3}
          borderRadius={20}
          key={screen.id}
          src={screen.image}
        ></Image>
      ))}
    </SimpleGrid>
  );
};

export default SShots;
