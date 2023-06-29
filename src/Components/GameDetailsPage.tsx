import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Box, Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import DescriptionBox from "./DescriptionBox";
import Attributes from "./Attributes";
import SShots from "./Screnshots";

const GameDetailsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGameDetails(id!);
  if (isLoading) return <Spinner></Spinner>;
  if (!data) return <Spinner></Spinner>;
  return (
    <>
      <Heading size="lg">{data.name}</Heading>
      <SimpleGrid columns={{ base: 1, lg: 2 }} paddingY={4} spacing={4}>
        <Box>
          <DescriptionBox>{data.description_raw || ""}</DescriptionBox>
          <Attributes data={data} />
        </Box>
        <SShots gameId={data.id.toString()}></SShots>
      </SimpleGrid>
    </>
  );
};

export default GameDetailsPage;
