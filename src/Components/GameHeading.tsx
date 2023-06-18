import { gameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
export interface nameComponent {
  name: { genreName: string; platformName: string };
}

const GameHeading = ({ name }: nameComponent) => {
  const dynamicHeading = `${name.platformName || ""} ${
    name.genreName || ""
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
