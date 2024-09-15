import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <div className="w-full min-h-screen flex flex-col ">
      <Nav />
      <main className="flex-1 px-[70px] py-[40px]">
        <Outlet />
      </main>
    </div>
  );
}
