import { Heading } from "@chakra-ui/react";
import useNameStore from "./storeNames";
export interface nameComponent {
  name: { genreName: string; platformName: string };
}

const GameHeading = () => {
  const { headingNames } = useNameStore();
  const dynamicHeading = `${headingNames.platformName || ""} ${
    headingNames.genreName || ""
  } Games`;
  return (
    <>
      <Heading as="h1" marginBottom={7} paddingX={5} fontSize={50}>
        {dynamicHeading}
      </Heading>
    </>
  );
};

export default GameHeading;
