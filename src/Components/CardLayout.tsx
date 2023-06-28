import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardLayout = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.05)",
        transition: " .2s",
      }}
      borderRadius="10px"
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default CardLayout;
