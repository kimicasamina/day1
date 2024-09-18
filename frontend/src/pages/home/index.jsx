import React from "react";
import Habits from "@/features/habits";

export default function Home() {
  return (
    <div className="home card h-full">
      <div className="profile card ">TOP</div>
      <div className="status card">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
        perspiciatis dolore sapiente laudantium optio nobis nam, exercitationem
        voluptatum ut quos?
      </div>
      <Habits />
      <div className="daily card col-start-2 col-end-2 row-start-2 row-end-4">
        daily
      </div>
      <div className="goals card col-start-3 col-end-3 row-start-2 row-end-4">
        goal
      </div>
    </div>
  );
}
