import React, { useEffect, useState } from "react";
import Habits from "@/features/habits";
import SearchBar from "@/components/searchbar";
import Tags from "@/components/tags";
import Modal from "@/components/modal";
import { useDispatch, useSelector } from "react-redux";
import { getTags } from "@/store/tags/actions";
import { getHabits } from "@/store/habits/actions";
import { TbScanPosition } from "react-icons/tb";

export default function Home() {
  
  const habits = useSelector((state) => state.habits);
  const tags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="h-full w-full bg-primary-foreground flex flex-col">
      <div className="h-[200px] w-full sm:max-w-[60%] flex flex-row mx-auto gap-x-2 px-4">
        <SearchBar />
        <Tags />
      </div>
      <div className="h-full w-full sm:max-w-[60%] mx-auto overflow-y-scroll no-scrollbar">
        <Habits habits={habits} tags={tags} />
      </div>
    </div>
  );
}
