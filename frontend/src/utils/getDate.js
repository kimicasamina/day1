export const getDate = (dates) => {
  const listOfDate = dates.map((item) => {
    return new Date(item.date).getDate();
  });

  return listOfDate;
};

export const formatDate = (date) => {
  let formattedDate = new Date(date);
  const options = {
    month: "short",
    day: "numeric",
    year: "numeric",
    weekday: "short",
  };

  return formattedDate.toLocaleDateString("en-GB", options);
};
