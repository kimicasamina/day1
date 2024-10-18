import React from "react";
import HabitProgress from "@/features/habitProgress";
import Piechart from "@/components/charts/piechart";

export default function Dashboard() {
  return (
    <div className="min-h-full w-full max-w-[1440px] mx-auto px-4 flex flex-col gap-8 bg-primary-foreground overflow-y-scroll no-scrollbar">
      {/* <div className="w-full h-[50%] grid grid-cols-1 md:grid-cols-2 gap-x-4 justify-between">
        <div className="flex-1 w-full h-full flex flex-col justify-center"> 
          <h1 className="font-semibold text-3xl">Todos Overview</h1>
          <Piechart />
        </div>
        <div className="flex-1 w-full h-full flex flex-col justify-center">
          <h1 className="font-semibold text-3xl">Goals Overview</h1>
          <Piechart />
        </div>
      </div> */}
      <div className="w-full">
        {/* <h1 className="font-semibold text-3xl">Habits Overview</h1> */}
        <HabitProgress />
      </div>
    </div>
  );
}
