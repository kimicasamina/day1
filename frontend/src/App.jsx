import { ErrorBoundary } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { getTags } from "@/store/tags/actions";
import { getHabits } from "@/store/habits/actions";
import { useEffect } from "react";
import { useAuth } from "./context/auth/auth";

function App() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getTags());
        dispatch(getHabits());
      } catch (err) {
        console.log(err);
      }
    }

    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <ErrorBoundary fallback={"An error has occurred"}>
      <Toaster />
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
