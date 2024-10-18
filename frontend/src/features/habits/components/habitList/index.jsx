import Habit from "../habit";
import { useEffect, useState } from "react";

export default function HabitList({ habits, searchInput, tags }) {
  if (!habits) return <h1 className="">Loading...</h1>;
  const [searchResults, setSearchResults] = useState([]);

  function getSearchResults() {
    const results = habits.filter((habit) => {
      let tags = habit?.tags?.map((tag) => tag.name);

      if (habit.name.toLowerCase().includes(searchInput.toLowerCase())) {
        return habit;
      }
      if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
        return habit;
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
        ? searchResults.map((habit) => <Habit habit={habit} key={habit._id} />)
        : null}
      {habits && searchResults.length === 0
        ? habits.map((habit, index) => <Habit habit={habit} key={index} />)
        : null}
    </ul>
  );
}
