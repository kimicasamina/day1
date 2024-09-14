import React from "react";
import HabitList from "./components/habitList/HabitList";

const habits = [
  {
    id: crypto.randomUUID(),
    name: "Walk the dog",
    description: "Walking, walking",
    category: "Health",
  },
  {
    id: crypto.randomUUID(),
    name: "Brush teeth",
    description: "brush teeth",
    category: "Personal",
  },
  {
    id: crypto.randomUUID(),
    name: "Code for atleast 30 minutes",
    description: "Coding, coding",
    category: "Productivity",
  },
];

export default function Habits() {
  return (
    <div className="habits">
      <div className="habits__title">
        <span className="">Habits</span>
      </div>
      <HabitList habits={habits} />
    </div>
  );
}
