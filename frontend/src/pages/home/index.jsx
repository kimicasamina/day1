import React, { useEffect, useState } from "react";
import Habits from "@/features/habits";
import Todos from "@/features/todos";
import SearchBar from "@/components/searchbar";
import Tags from "@/components/tags";
import Goals from "@/features/goals";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const habits = useSelector((state) => state.habits);
  const [searchResults, setSearchResults] = useState("");

  const tags = useSelector((state) => state.tags);
  const todos = useSelector((state) => state.todos);
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();

  return (
    <div className="h-full w-full bg-primary-foreground flex flex-col">
      <div className="h-[200px] w-full sm:max-w-[60%] flex flex-row mx-auto gap-x-2 px-4">
        <SearchBar setSearchInput={setSearchInput} />
        <Tags />
      </div>
      <div className="h-full w-full grid md:grid-cols-3 overflow-y-scroll no-scrollbar">
        <Habits habits={habits} searchInput={searchInput} tags={tags} />
        <Todos todos={todos} searchInput={searchInput} tags={tags} />
        <Goals goals={goals} searchInput={searchInput} tags={tags} />
      </div>
    </div>
  );
}
