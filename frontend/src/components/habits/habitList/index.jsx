import HabitDetails from "@/components/modal/habitDetails";
import Habit from "../habit";
import React, { useState } from "react";

import { TbPencil } from "react-icons/tb";

export default function HabitList({ habits }) {
  const [isOpen, setIsOpen] = useState(false);
  let days = [];
  let nameOfTheDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

  // function onViewDetails(e) {
  //   if()
  // }

  function getMonth() {
    for (let index = 1; index < 31; index++) {
      days.push({
        id: crypto.randomUUID(),
        date: index,
        status: index % 5 == 0 ? "completed" : "missed",
      });
    }
  }

  getMonth();
  if (!habits) return <h1 className="">Loading...</h1>;
  console.log(habits);

  return (
    <ul className="habits__list h-full overflow-y-scroll flex flex-col gap-y-2">
      {habits ? (
        habits.map((habit, index) => <Habit habit={habit} key={habit._id} />)
      ) : (
        <h1 className="">Habits empty.</h1>
      )}
    </ul>
  );
}
