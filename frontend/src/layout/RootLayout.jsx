import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";
import { useAuth } from "@/context/auth/auth";

export default function RootLayout() {
  const { user, isFetching, error } = useAuth();

  if (!user && isFetching) {
    return <h1 className="">Loading...</h1>;
  }

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
