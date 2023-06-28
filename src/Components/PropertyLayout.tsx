import { Box, Heading } from "@chakra-ui/react";
import React, { ReactNode } from "react";
interface Props {
  heading: string;
  children: ReactNode | ReactNode[];
}
const PropertyLayout = ({ children, heading }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" size="xs" color="gray.600">
        {heading}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default PropertyLayout;
