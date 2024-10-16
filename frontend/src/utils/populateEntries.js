import axios from "axios";

async function addEntry(habitId, date) {
  const entry = await axios.post(
    `http://localhost:4000/api/entries/${habitId}`,
    { date }
  );
}
export async function populateEntries(habitId, date) {
  const habits = await axios.get("http://localhost:4000/api/habits");
  habits.forEach((habit) => {
    addEntry(habitId, date);
  });
}
