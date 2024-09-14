import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";

// Load environment variables from .env file
config();
// const mode = process.env.VITE_MODE; // This now exists.
// console.log("MODE: ", mode);
// https://vitejs.dev/config/
export default defineConfig({
  // Your Vite configuration
  define: {
    "process.env": process.env,
  },
  plugins: [
    react(),
    sentryVitePlugin({
      // org: "kimicasamina",
      // project: "habit-tracker",
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],

  build: {
    sourcemap: true,
  },

  server: {
    proxy: {
      "/api": {
        target:
          process.env.VITE_MODE === "development"
            ? "http://localhost:8080/"
            : "https://d4y0ne.onrender.com",
      },

      "/admin": {
        target: "http://localhost:8081/",
      },
    },
  },
});
