import { gameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
interface Props {
  gameQuery: gameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const dynamicHeading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <>
      <Heading as="h1" marginBottom={7} fontSize={50}>
        {dynamicHeading}
      </Heading>
    </>
  );
};

export default GameHeading;
