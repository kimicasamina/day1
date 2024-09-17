const initialValue = [];

const habitsReducer = (habits = initialValue, action) => {
  switch (action.type) {
    case "GET_HABITS":
      return [...action.payload];

    case "ADD_HABIT":
      console.log("PAYLOAD:", action.payload)
      return [...habits, action.payload];
      
    default:
      return habits;
  }
};

export default habitsReducer;
