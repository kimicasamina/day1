import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";

export default function TodoList({ todos, searchInput, tags }) {
  if (!todos) return <h1 className="">Loading...</h1>;
  const [searchResults, setSearchResults] = useState([]);

  function getSearchResults() {
    const results = todos.filter((todo) => {
      let tags = todo?.tags?.map((tag) => tag.name);
      if (todo?.name?.toLowerCase().includes(searchInput.toLowerCase())) {
        return todo;
      }
      if (tags?.join(" ").toLowerCase().includes(searchInput.toLowerCase())) {
        return todo;
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
        ? searchResults.map((item) => <Todo todo={item} key={item._id} />)
        : todos.map((todo, index) => {
            return <Todo todo={todo} key={todo._id} />;
          })}
    </ul>
  );
}
