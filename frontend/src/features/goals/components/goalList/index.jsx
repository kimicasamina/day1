import React from "react";
import Goal from "../goal";

export default function GoalList({ goals, searchResults, tags }) {
  return (
    <ul className="habits__list h-full overflow-y-scroll no-scrollbar flex flex-col gap-y-2 ">
      {/* {searchResults
        ? searchResults.map((item) => <Goal goal={item} key={item._id} />)
        : null} */}
      {goals.length > 0
        ? goals.map((goal, index) => {
            return <Goal goal={goal} key={goal._id} />;
          })
        : null}
    </ul>
  );
}
