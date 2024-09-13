import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import Habits from "../pages/habits/Habits";
import Daily from "../pages/daily/Daily";

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
        element: <Habits />,
      },
      {
        path: "/daily",
        element: <Daily />,
      },
    ],
  },
]);
