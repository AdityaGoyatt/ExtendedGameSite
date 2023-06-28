import { Heading } from "@chakra-ui/react";
import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading size="2xl">Opps.....</Heading>
      <Heading marginTop={4} size={"lg"}>
        {isRouteErrorResponse(error)
          ? "the page you tried to access doesnt exists"
          : "Unexpected Error"}
      </Heading>
    </>
  );
};

export default ErrorPage;
