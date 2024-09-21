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

export const formatDateShort = (date) => {
  let formattedDate = new Date(date);
  const options = {
    // month: "short",
    //   day: "2-digit",
    weekday: "short",
    // year: "numeric",
  };

  return formattedDate.toLocaleDateString("en-GB", options);
};
