import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://1c2d5f4965d86e563fb0d6bd79076702@o4507945116893184.ingest.us.sentry.io/4507946746904576",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { ProvideUi } from "./context/ui/ui.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <html data-theme="cupcake">
      <Provider store={store}>
        <ProvideUi>
          <App />
        </ProvideUi>
      </Provider>
    </html>
  </StrictMode>
);
