import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <Nav />
      <main className="main-layout">
        <Outlet />
      </main>
    </div>
  );
}
