import React, { useState, useEffect } from "react";
import HabitList from "../habitList/index.jsx";
import axios from "axios";
import useFetch from "../../../hooks/useFetch.jsx";
import { BiSolidPlusSquare } from "react-icons/bi";

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
    <div className="w-full min-h-full flex flex-col gap-y-8 bg-base-200 text-base-content p-4">
      <h1 className="font-semibold text-5xl">Habits</h1>
      <div className="flex align-items gap-x-2 px-2">
        <input
          type="text"
          className="input w-full"
          placeholder="Walk the dog..."
        />
        <span className="cursor-pointer ">
          <BiSolidPlusSquare className="w-[38px] h-full hover:text-primary-content" />
        </span>
      </div>
      <HabitList habits={habits} />
    </div>
  );
}
