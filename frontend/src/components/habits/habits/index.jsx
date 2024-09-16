import React, { useState, useEffect } from "react";
import HabitList from "../habitList/index.jsx";
import axios from "axios";
import useFetch from "../../../hooks/useFetch.jsx";
import { DialogTrigger, Dialog } from "@/components/ui/dialog.jsx";
import { Button } from "@/components/ui/button";
import CreateHabit from "@/components/modal/createHabit.jsx/index.jsx";
const habits = [
  {
    id: crypto.randomUUID(),
    name: "Walk the dog",
    description: "Walking, walking",
    category: "Health",
  },
  {
    id: crypto.randomUUID(),
    name: "Brush teeth",
    description: "brush teeth",
    category: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Code for atleast 30 minutes",
    description: "Coding, coding",
    category: "Productivity",
  },
  {
    id: crypto.randomUUID(),
    name: "Brush teeth",
    description: "brush teeth",
    category: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Brush teeth",
    description: "brush teeth",
    category: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Code for atleast 30 minutes",
    description: "Coding, coding",
    category: "Productivity",
  },
  {
    id: crypto.randomUUID(),
    name: "Code for atleast 30 minutes",
    description: "Coding, coding",
    category: "Productivity",
  },
  {
    id: crypto.randomUUID(),
    name: "Walk the dog",
    description: "Walking, walking",
    category: "Health",
  },
];

export default function Habits() {
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      setIsFetching(true);
      try {
        const { data } = await axios.get(url);
        console.log("response: ", data);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsFetching(false);
      }
    }
    fetchData("/api/habits");
  }, []);

  if (!data || isFetching) return <h1>LOADING...</h1>;
  console.log("DATA: ", data);

  return (
    <div className="habits overflow-y-hidden flex flex-col p-4">
      <h1 className="habits__title font-semibold text-4xl ">Habits</h1>
      <div className="overflow-y-hidden flex flex-col gap-y-2 bg-base-200 p-2">
        <CreateHabit />
        <HabitList habits={data.habits} />
      </div>
    </div>
  );
}
