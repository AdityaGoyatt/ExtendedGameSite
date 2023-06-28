import NavBAr from "./NavBar";
import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

const IndexPage = () => {
  return (
    <>
      <Box padding={5}>
        <NavBAr />
        <Outlet />
      </Box>
    </>
  );
};

export default IndexPage;
