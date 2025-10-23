import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Plants from "../Pages/Plants";
import PlantDetails from "../Pages/plantDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
  },
  {
    path: "/plants",
    Component: Plants,
    loader: () => fetch("/plants.json"),
  },
  {
    path: "/plant-details/:id",
    Component: PlantDetails,
    loader: () => fetch("/plants.json"),
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    element: <h2>Error404</h2>,
  },
]);
