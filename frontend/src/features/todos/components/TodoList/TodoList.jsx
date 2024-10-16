import React from "react";
import Todo from "../Todo/Todo";

export default function TodoList({ todos, searchResults }) {
  if (!todos) return <h1 className="">Loading...</h1>;
  console.log("todos:", todos);
  console.log("search results:", searchResults);

  return (
    <ul className="habits__list h-full overflow-y-scroll no-scrollbar flex flex-col gap-y-2 ">
      {searchResults
        ? searchResults.map((item) => <Todo todo={item} key={item._id} />)
        : null}
      {todos.length > 0
        ? todos.map((todo, index) => {
            return <Todo todo={todo} key={todo._id} />;
          })
        : null}
    </ul>
  );
}
