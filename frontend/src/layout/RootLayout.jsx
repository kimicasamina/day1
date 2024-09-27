import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

export default function RootLayout() {
  return (
    <html data-theme="cupcake">
      <div className="w-full max-w-[1440px] h-screen mx-auto flex flex-col justify-between text-base-content ">
        <Nav />
        <main className="h-full w-full text-base-content flex flex-col overflow-y-scroll no-scrollbar">
          <Outlet />
        </main>
      </div>
    </html>
  );
}
