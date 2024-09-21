export const getMonth = (currentDate) => {
  const date = new Date(currentDate);
  const month = date.getMonth();
  const year = date.getFullYear();
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);

  const getDaysArray = function (start, end) {
    const arr = [];
    for (
      const dt = new Date(start);
      dt <= new Date(end);
      dt.setDate(dt.getDate() + 1)
    ) {
      arr.push(new Date(dt));
    }
    console.log("date arr:", arr);
    return arr;
  };

  const daylist = getDaysArray(startDate, endDate);
  console.log("Daylist: ", daylist);
  //   daylist.map((v) => v.toISOString().slice(0, 10)).join("");
  //   console.log("daylist:", daylist);
  return daylist;
};
