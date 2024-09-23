import React from "react";
import Habits from "@/features/habits";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <div className="h-full flex flex-col   bg-primary-foreground">
      <SearchBar />
      <Habits />
    </div>
  );
}
