import React, { useState, useEffect } from "react";
import Nav from "../components/nav/Nav";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/auth/auth";
import { useDispatch } from "react-redux";
import { getHabits } from "@/store/habits/actions";
import { getTags } from "@/store/tags/actions";

export default function ProfileLayout() {
  const { user, isFetching, error } = useAuth();
  const dispatch = useDispatch();
  console.log("USER ID: ", user?._id);

  if (isFetching && !user) {
    return <h1 className="">Loading...</h1>;
  } else if (!isFetching && !user) {
    return <Navigate to="/login" />;
  }

  if (!isFetching && user) {
    dispatch(getHabits(user._id));
    dispatch(getTags());
    return <Outlet />;
  }

  // useEffect(() => {
  //   if (user && !isFetching) {
  //     dispatch(getHabits(user._id));
  //   }
  // }, []);
}
