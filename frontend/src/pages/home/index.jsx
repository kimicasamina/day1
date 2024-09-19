import React from "react";
import Habits from "@/features/habits";

export default function Home() {
  return (
    <div className="h-full flex flex-row gap-x-8">
      <Habits />
      <div className="flex-1 h-full grow daily card col-start-2 col-end-2 row-start-2 row-end-4">
        daily
      </div>
      <div className="flex-1 h-full grow goals card col-start-3 col-end-3 row-start-2 row-end-4">
        goal
      </div>
    </div>
  );
}
