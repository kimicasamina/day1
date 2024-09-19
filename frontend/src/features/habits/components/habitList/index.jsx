import Habit from "../habit";
import React, { useState } from "react";

export default function HabitList({ habits }) {
  if (!habits) return <h1 className="">Loading...</h1>;

  return (
    <ul className="habits__list h-full overflow-y-scroll flex flex-col gap-y-2 ">
      {habits ? (
        habits.map((habit, index) => <Habit habit={habit} key={index} />)
      ) : (
        <h1 className="">Habits empty.</h1>
      )}
    </ul>
  );
}
