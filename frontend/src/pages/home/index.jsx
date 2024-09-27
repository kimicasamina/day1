import React, { useEffect, useState } from "react";
import Habits from "@/features/habits";
import SearchBar from "@/components/searchbar";
import Tags from "@/components/tags";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const habits = useSelector((state) => state.habits);
  const searchResults = habits.filter((habit) => {
    let tags = habit?.tags?.map((tag) => tag.name);

    if (habit.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return habit;
    }
    if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
      return habit;
    }
  });
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="h-full w-full bg-primary-foreground flex flex-col">
      <div className="h-[200px] w-full sm:max-w-[60%] flex flex-row mx-auto gap-x-2 px-4">
        <SearchBar setSearchInput={setSearchInput} />
        <Tags />
      </div>
      <div className="h-full w-full sm:max-w-[60%] mx-auto overflow-y-scroll no-scrollbar">
        <Habits habits={habits} searchResults={searchResults} tags={tags} />
      </div>
    </div>
  );
}
