import { useState } from "react";
import { ErrorBoundary } from "@sentry/react";

// import "./App.css";
import "./stylesheet/scss/Main.scss";

import { RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import { router } from "./routes";

function App() {
  return (
    <ErrorBoundary fallback={"An error has occurred"}>
      <RouterProvider router={router} />;
    </ErrorBoundary>
  );
}

export default App;
