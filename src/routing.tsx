import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "./Components/GameDetailsPage";
import IndexPage from "./Components/IndexPage";
import GamesContentPage from "./Components/GamesContent";

const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
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
