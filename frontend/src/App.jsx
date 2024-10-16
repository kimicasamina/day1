import { ErrorBoundary } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
    // <ErrorBoundary fallback={"An error has occurred"}>
    // </ErrorBoundary>
  );
}

export default App;
