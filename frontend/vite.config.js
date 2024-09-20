import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { config } from "dotenv";
import path from "path";

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
      org: process.env.VITE_SENTRY_ORG,
      project: process.env.VITE_SENTRY_PROJECT,
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    }),
  ],

  // resolve shadcdn path
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: true,
  },
  server: {
    proxy: {
      "/api": {
        target:
          process.env.VITEMODE === "production"
            ? process.env.VITE_CLIENT_URL
            : "http://localhost:8080",
      },

      "/admin": {
        target: "http://localhost:8081/",
      },
    },
  },
});
