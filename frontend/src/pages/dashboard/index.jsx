import React from "react";
import Progress from "@/features/progress";

export default function Dashboard() {
  return (
    <div className="h-full flex flex-row gap-x-8 p-8 overflow-y-scroll bg-primary-foreground">
      <Progress />
    </div>
  );
}
