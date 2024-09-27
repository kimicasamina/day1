import React, { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth/auth";

export default function ProfileLayout() {
  const { user, isFetching, error } = useAuth();

  console.log("USER: ", user);

  if (isFetching && !user) {
    return <h1 className="">Loading...</h1>;
  } else if (!isFetching && !user) {
    return <Navigate to="/login" />;
  }

  if (!isFetching && user) {
    return <Outlet />;
  }
}
