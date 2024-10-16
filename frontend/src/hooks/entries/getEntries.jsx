import { formatDate } from "@/utils/dateHelpers";

export const getEntries = (dates, entries) => {
  let habitEntries = [];
  for (let j = 0; j < dates.length; j++) {
    const currentDate = {
      date: new Date(dates[j]),
      entries: [],
    };
    habitEntries.push(currentDate);

    for (let k = 0; k < entries?.length; k++) {
      if (formatDate(entries[k].date) === formatDate(dates[j])) {
        habitEntries[j].entries.push({
          habitId: entries[k].habitId,
          date: entries[k].date,
          id: entries[k]._id,
        });
      }
    }
  }

  console.log("habit entries:", habitEntries);
  return habitEntries;
};
