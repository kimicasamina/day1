import { useState } from "react";
// import "./App.css";
import "./stylesheet/scss/Main.scss";

import { RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { router } from "./routes";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
