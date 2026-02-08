import { createBrowserRouter } from "react-router-dom";
import TopPage from "./pages/TopPage";
import { GameListPage } from "./pages/GameListPage";
import { GameDetailPage } from "./pages/GameDetailPage";

export const router = createBrowserRouter([
  { path: "/", element: <TopPage /> },
  { path: "/games", element: <GameListPage /> },
  { path: "/games/:id", element: <GameDetailPage /> },
]);