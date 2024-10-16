import React, { useEffect, useState } from "react";
import Habits from "@/features/habits";
import Todos from "@/features/todos";
import SearchBar from "@/components/searchbar";
import Tags from "@/components/tags";
import { useDispatch, useSelector } from "react-redux";

// const todos = [
//   {
//     _id: crypto.randomUUID(),
//     name: "Buy Grocery",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui exercitationem.",
//   },
//   {
//     _id: crypto.randomUUID(),
//     name: "Go to the salon",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui exercitationem.",
//   },
//   {
//     _id: crypto.randomUUID(),
//     name: "Pick of clothes",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui exercitationem.",
//   },
//   {
//     _id: crypto.randomUUID(),
//     name: "Attend meeting at 4pm",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, qui exercitationem.",
//   },
// ];

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const habits = useSelector((state) => state.habits);
  const searchResults = habits.filter((habit) => {
    let tags = habit?.tags?.map((tag) => tag.name);

    if (habit.name.toLowerCase().includes(searchInput.toLowerCase())) {
      return habit;
    }
    if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
      return habit;
    }
  });
  const tags = useSelector((state) => state.tags);
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (!tags && !habits) {
    return <h1 className="">Loading...</h1>;
  }
  console.log("todos:", todos);
  console.log("tags:", tags);

  return (
    <div className="h-full w-full bg-primary-foreground flex flex-col">
      <div className="h-[200px] w-full sm:max-w-[60%] flex flex-row mx-auto gap-x-2 px-4">
        <SearchBar setSearchInput={setSearchInput} />
        <Tags />
      </div>
      <div className="h-full w-full grid md:grid-cols-3 overflow-y-scroll no-scrollbar">
        <Habits habits={habits} searchResults={searchResults} tags={tags} />
        <Todos todos={todos} searchResults={searchResults} tags={tags} />
      </div>
    </div>
  );
}
