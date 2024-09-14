import React, { useState, useEffect } from "react";
import HabitList from "./components/habitList/HabitList";
import axios from "axios";
import useFetch from "../../hooks/useFetch.jsx";

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
    <div className="habits">
      <div className="habits__title">
        <span className="">Habits</span>
      </div>
      <HabitList habits={data.habits} />
    </div>
  );
}
