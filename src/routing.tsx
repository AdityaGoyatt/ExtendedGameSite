import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./Components/GameDetailsPage";
import IndexPage from "./Components/IndexPage";
import GamesContentPage from "./Components/GamesContent";
import ErrorPage from "./Components/ErrorPage";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <GamesContentPage />,
      },
      {
        path: "games/:id",
        element: <GameDetailsPage />,
      },
    ],
  },
]);

export default mainRouter;
