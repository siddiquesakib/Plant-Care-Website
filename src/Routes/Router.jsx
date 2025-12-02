import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import Plants from "../Pages/Plants";
import ErrorPage from "../Pages/ErrorPage";
import PrivateRoute from "../Context/PrivetRoute";
import Profile from "../Pages/Profile";
import Home from "../Pages/Home";
import About from "../Pages/About";
import PlantDetails from "../Pages/PlantDetails";
import FAQPage from "../Pages/FAQPage";
import Blogs from "../Pages/Blogs";
import BlogcardDetails from "../Component/BlogcardDetails";

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
    element: <PlantDetails />,
    loader: () => fetch("/plants.json"),
  },

  {
    path: "/about",
    Component: About,
  },
  {
    path: "/blogs",
    Component: Blogs,
    loader: () => fetch("/blogs.json"),
  },
  {
    path: "/blog-details/:id",
    Component: BlogcardDetails,
    loader: () => fetch("/blogs.json"),
  },
  {
    path: "/faq",
    Component: FAQPage,
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
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
