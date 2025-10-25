import { createBrowserRouter } from "react-router";

import HomeLayout from "../Layouts/HomeLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Plants from "../Pages/Plants";
import PlantDetails from "../Pages/plantDetails";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Context/PrivetRoute";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    loader: () => fetch("/plants.json"),
  },
  {
    path: "/home",
    Component: Home,
  },
  {
    path: "/plants",
    Component: Plants,
    loader: () => fetch("/plants.json"),
  },
  {
    path: "/plant-details/:id",
    element: (
      <PrivateRoute>
        <PlantDetails />
      </PrivateRoute>
    ),
    loader: () => fetch("/plants.json"),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Profile />
      </PrivateRoute>
    ),
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
    element: <ErrorPage></ErrorPage>,
  },
]);
