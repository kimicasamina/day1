export default function HabitList({ items, searchResults }) {
  if (!items) return <h1 className="">Loading...</h1>;

  return (
    <ul className="habits__list h-full overflow-y-scroll no-scrollbar flex flex-col gap-y-2 ">
      {searchResults
        ? searchResults.map((habit) => <Habit habit={habit} key={habit._id} />)
        : null}
      {habits && searchResults === ""
        ? habits.map((habit, index) => <Habit habit={habit} key={index} />)
        : null}
    </ul>
  );
}
