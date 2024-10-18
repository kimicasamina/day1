import React, { useEffect, useState } from "react";
import Goal from "../goal";

export default function GoalList({ goals, searchInput, tags }) {
  // if (!goals) return <h1 className="">Loading...</h1>;
  const [searchResults, setSearchResults] = useState([]);
  console.log("GOALS:", goals);
  function getSearchResults() {
    const results = goals.filter((goal) => {
      let tags = goal?.tags?.map((tag) => tag.name);

      if (goal.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return goal;
      }
      if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
        return goal;
      }
    });
    return results;
  }

  useEffect(() => {
    setSearchResults(getSearchResults());
  }, [searchInput]);
  return (
    <ul className="habits__list h-full overflow-y-scroll no-scrollbar flex flex-col gap-y-2 ">
      {searchResults.length > 0
        ? searchResults.map((item) => <Goal goal={item} key={item._id} />)
        : goals.map((goal, index) => {
            return <Goal goal={goal} key={goal._id} />;
          })}
    </ul>
  );
}
