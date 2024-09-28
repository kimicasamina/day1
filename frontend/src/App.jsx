import { ErrorBoundary } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <ErrorBoundary fallback={"An error has occurred"}>
      <Toaster />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
