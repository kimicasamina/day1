import React from "react";
import Habits from "@/features/habits";

export default function Home() {
  return (
    <div className="h-full flex flex-row gap-x-8 p-8 bg-primary-foreground">
      <Habits />
    </div>
  );
}
