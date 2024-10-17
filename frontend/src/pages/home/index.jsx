import React, { useEffect, useState } from "react";
import Habits from "@/features/habits";
import Todos from "@/features/todos";
import SearchBar from "@/components/searchbar";
import Tags from "@/components/tags";
import Goals from "@/features/goals";
import { useDispatch, useSelector } from "react-redux";

const goals = [
  {
    _id: crypto.randomUUID(),
    name: "Save for a Vacation",
    description: "Save $5,000 for a trip to Europe",
    startDate: new Date(),
    targetDate: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    name: "Enhance Data Analysis Skills",
    description:
      "Complete online courses in data analysis to improve job performance",
    startDate: new Date(),
    targetDate: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    name: "Get Fit",
    description:
      "Achieve a healthier lifestyle by exercising regularly and eating better",
    startDate: new Date(),
    targetDate: new Date(),
  },
  {
    _id: crypto.randomUUID(),
    name: "Read More Books",
    description:
      "Read at least 12 books this year to expand knowledge and relax",
    startDate: new Date(),
    targetDate: new Date(),
  },
];

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const habits = useSelector((state) => state.habits);
  const [searchResults, setSearchResults] = useState("");

  const tags = useSelector((state) => state.tags);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }
  console.log("SEARCH RESULTS:", searchResults);
  console.log("TODOS:", todos);

  useEffect(() => {
    if (searchInput !== "") {
      const results = habits.filter((habit) => {
        let tags = habit?.tags?.map((tag) => tag.name);

        if (habit.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return habit;
        }
        if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
          return habit;
        }
      });
      setSearchResults(results);
    }
  }, [searchInput]);

  return (
    <div className="h-full w-full bg-primary-foreground flex flex-col">
      <div className="h-[200px] w-full sm:max-w-[60%] flex flex-row mx-auto gap-x-2 px-4">
        <SearchBar setSearchInput={setSearchInput} />
        <Tags />
      </div>
      <div className="h-full w-full grid md:grid-cols-3 overflow-y-scroll no-scrollbar">
        <Habits habits={habits} searchResults={searchResults} tags={tags} />
        <Todos todos={todos} searchResults={searchResults} tags={tags} />
        {/* <Goals goals={goals} searchResults={searchResults} tags={tags} /> */}
      </div>
    </div>
  );
}
