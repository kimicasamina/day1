import React, { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth/auth";
import { useDispatch } from "react-redux";
import { getTags } from "@/store/tags/actions";
import { getHabits } from "@/store/habits/actions";

export default function ProfileLayout() {
  const { user, isFetching, error } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getTags());
        dispatch(getHabits());
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

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
