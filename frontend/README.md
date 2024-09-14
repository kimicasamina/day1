# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

plugins: [
react(),
sentryVitePlugin({
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
          target: "http://localhost:8080/api",
        },

        "/admin": {
          target: "http://localhost:8081/",
        },
      },
    },
