import React from "react";
import Habits from "@/components/habits/habits";

export default function Home() {
  return (
    <div className="grid grid-cols-3 grid-rows-3">
      <Habits />
    </div>
  );
}
