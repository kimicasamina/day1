import React from "react";

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
    <ul className="habit-list">
      {habits ? (
        habits.map((item, index) => (
          <li className="habit" key={index}>
            {/* <input
              type="checkbox"
              name="check"
              id=""
              
            /> */}
            <p className="habit-name">{item.name}</p>
            {/* <p className="habit-description">{item.description}</p> */}
            <div className="habit-tracker">
              <div className="calendar">
                <div className="week">
                  {nameOfTheDay.map((day, index) => (
                    <span className="nameOfTheDay" key={index}>
                      {day}
                    </span>
                  ))}
                </div>

                <div className="listOfDays">
                  {days.map((item, index) => (
                    <div
                      className={`day ${item.status === "completed" ? "completed" : "missed"}`}
                      key={item.id}
                    >
                      {item.date}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </li>
        ))
      ) : (
        <h1 className="">Habits empty.</h1>
      )}
    </ul>
  );
}
