import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import Modal from "@/components/modal/modal";

export default function RootLayout() {
  return (
    <div className="w-full max-w-[1440px] h-screen mx-auto flex flex-col bg-base-100 text-base-content overflow-y-hidden">
      <Nav />

      <main className="flex-1 px-8 py-8 text-base-content flex flex-col overflow-y-hidden">
        <Outlet />
      </main>
    </div>
  );
}
