import React from "react";
import { BiCheck } from "react-icons/bi";

export default function HabitList({ habits }) {
  let days = [];
  let nameOfTheDay = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

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
    <ul className="flex-1 flex flex-col gap-y-4 ">
      {habits ? (
        habits.map((item, index) => (
          <li
            className="relative w-full flex rounded-md bg-secondary py-2"
            key={index}
          >
            <span className="px-2">
              <BiCheck className="w-[38px] h-full" />
            </span>
            <div className="flex-1 flex flex-col leading-snug">
              <p className="font-semibold text-secondary-content text-xl ">
                {item.name}
              </p>
              <p className="font-normal text-secondary-content text-xs ">
                {item.description}
              </p>
            </div>
          </li>
          // <li className="habit" key={index}>
          //   <p className="habit-name">{item.name}</p>
          //   <p className="habit-description">{item.description}</p>
          //   <div className="habit-tracker">
          //     <div className="calendar">
          //       <div className="week">
          //         {nameOfTheDay.map((day, index) => (
          //           <span className="nameOfTheDay" key={index}>
          //             {day}
          //           </span>
          //         ))}
          //       </div>

          //       <div className="listOfDays">
          //         {days
          //           .map((item, index) => (
          //             <div
          //               className={`day ${item.status === "completed" ? "completed" : "missed"}`}
          //               key={item.id}
          //             >
          //               {item.date}
          //             </div>
          //           ))
          //           .slice(0, 7)}
          //       </div>
          //     </div>
          //   </div>
          // </li>
        ))
      ) : (
        <h1 className="">Habits empty.</h1>
      )}
    </ul>
  );
}
