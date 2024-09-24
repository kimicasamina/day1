import React from "react";
import Progress from "@/features/progress";

export default function Dashboard() {
  return (
    <div className="min-h-full flex flex-row gap-x-8  bg-primary-foreground  overflow-y-scroll no-scrollbar">
      <Progress />
    </div>
  );
}
