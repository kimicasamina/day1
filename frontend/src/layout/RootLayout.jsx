import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <div className="w-full max-w-[1440px] h-screen mx-auto flex flex-col   text-base-content overflow-y-hidden">
      <Nav />
      <main className="h-screen pt-[60px] bg-base-100 text-base-content flex flex-col overflow-y-hidden">
        <Outlet />
      </main>
    </div>
  );
}
