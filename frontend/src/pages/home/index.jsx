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
  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getTags());
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        dispatch(getHabits());
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }

  return (
    <div className="h-full flex flex-col   bg-primary-foreground">
      <SearchBar />
      <Habits habits={habits} tags={tags} />
    </div>
  );
}
