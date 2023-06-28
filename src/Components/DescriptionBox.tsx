import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import useGameDetails from "../hooks/useGameDetails";
interface Props {
  children: string;
}
const DescriptionBox = ({ children }: Props) => {
  const limit = 300;
  if (children.length <= limit) return <Text>{children}</Text>;
  const [isExpanded, setIsExpanded] = useState(false);
  const displayString = isExpanded
    ? children
    : children.substring(0, limit) + "...";

  return (
    <>
      <Text paddingY={3}>
        {displayString + "  "}
        <Button
          colorScheme="yellow"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};

export default DescriptionBox;
