import React, { useEffect } from "react";
import Habits from "@/features/habits";
import SearchBar from "@/components/searchbar";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "@/store/tags/actions";
import { getHabits } from "@/store/habits/actions";

export default function Home() {
  const habits = useSelector((state) => state.habits);
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="h-full w-full bg-primary-foreground">
      <div className="h-full w-full sm:max-w-[50%] flex flex-col sm:p-8 mx-auto">
        <SearchBar />
        <Habits habits={habits} tags={tags} />
      </div>
    </div>
  );
}
