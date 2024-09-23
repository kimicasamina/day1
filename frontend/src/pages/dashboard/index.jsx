import React from "react";
import Progress from "@/features/progress";

export default function Dashboard() {
  return (
    <div className="h-full flex flex-row gap-x-8  bg-primary-foreground  overflow-y-scroll ">
      <Progress />
    </div>
  );
}
