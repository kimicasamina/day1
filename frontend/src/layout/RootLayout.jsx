import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <div className="layout">
      <Nav />
      <main className="layout__main">
        <Outlet />
      </main>
    </div>
  );
}
