import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Dashboard from "@/pages/dashboard";
import Home from "@/pages/home/index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/habits",
        element: <Home />,
      },
      // {
      //   path: "/daily",
      //   element: <Daily />,
      // },
    ],
  },
]);
