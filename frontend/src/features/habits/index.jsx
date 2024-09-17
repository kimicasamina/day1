import React, { useState, useEffect } from "react";
import HabitList from "./components/habitList/index.jsx";
import axios from "axios";
import useFetch from "../../hooks/useFetchData.jsx";
import { DialogTrigger, Dialog } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button";
import CreateHabit from "@/components/modal/createHabit.jsx/index.jsx";

import useFetchData from "../../hooks/useFetchData.jsx";

export default function Habits() {
  const { data, loading, error } = useFetchData("/api/habits");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log("HABITS: ", data.habits);

  return (
    <div className="habits overflow-y-hidden flex flex-col p-4">
      <h1 className="habits__title font-semibold text-4xl ">Habits</h1>
      <div className="overflow-y-hidden h-full flex flex-col gap-y-2 bg-base-200 p-2">
        <CreateHabit />
        <HabitList habits={data.habits} />
      </div>
    </div>
  );
}
