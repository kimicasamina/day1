import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <div className="w-full max-w-screen-xl h-screen mx-auto flex flex-col justify-between bg-base-100 text-base-content">
      <Nav />
      <main className="flex-1 px-[70px] py-[40px] bg-base-100 text-base-content">
        <Outlet />
      </main>
    </div>
  );
}
