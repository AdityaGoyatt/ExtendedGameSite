import { useParams } from "react-router-dom";
import useGameDetails from "../hooks/useGameDetails";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetailsPage = () => {
  const param = useParams();
  const { data, error, isLoading } = useGameDetails(param.id!);

  return (
    <>
      {isLoading && <Spinner />}
      <Heading size="lg">{data?.name}</Heading>
      <Text>{data?.description_raw}</Text>
    </>
  );
};

export default GameDetailsPage;
