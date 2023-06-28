import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import DescriptionBox from "./DescriptionBox";
import Attributes from "./Attributes";
import Test from "./Screnshots";
import SShots from "./Screnshots";

const GameDetailsPage = () => {
  const { id } = useParams();
  const { data, error, isLoading } = useGameDetails(id!);
  if (isLoading) return <Spinner></Spinner>;
  if (!data) return;
  return (
    <>
      {isLoading && <Spinner />}
      <Heading size="lg">{data.name}</Heading>
      <DescriptionBox>{data.description_raw || ""}</DescriptionBox>
      <Attributes data={data} />
      <SShots gameId={data.id.toString()}></SShots>
    </>
  );
};

export default GameDetailsPage;
