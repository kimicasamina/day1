const initialValue = [];

const habitsReducer = (habits = initialValue, action) => {
  switch (action.type) {
    case "GET_HABITS":
      return [...action.payload];

    case "ADD_HABIT":
      console.log("PAYLOAD:", action.payload);
      return [...habits, action.payload];

    case "EDIT_HABIT":
      const newHabits = habits.map((habit) => {
        if (habit._id === action.payload._id) {
          return { ...action.payload };
        }
        return habit;
      });
      return [...newHabits];

    default:
      return habits;
  }
};

export default habitsReducer;
