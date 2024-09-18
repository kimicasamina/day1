import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import ProfileLayout from "@/layout/ProfileLayout";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home/index";
import Login from "@/pages/login";
import Register from "@/pages/register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "/habits",
            element: <Home />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
