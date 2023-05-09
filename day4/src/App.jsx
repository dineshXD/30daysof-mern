import Nav from "./Nav";
import "./App.css";
import RecentMovies from "./RecentMovies";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import MovieDetailScreen from "./MovieDetailScreen";
import SearchMovies from "./SearchMovies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/",
        element: <RecentMovies genre isActivated />,
      },
      {
        path: "search/:movieName",
        element: <SearchMovies />,
      },
      {
        path: "/:id",
        element: <MovieDetailScreen />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
