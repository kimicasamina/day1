const initialValue = [];

const habitsReducer = (habits = initialValue, action) => {
  switch (action.type) {
    case "GET_HABITS": {
      return [...action.payload];
    }

    case "ADD_HABIT": {
      console.log("PAYLOAD:", action.payload);
      return [...habits, action.payload];
    }

    case "EDIT_HABIT": {
      const newHabits = habits.map((habit) => {
        if (habit._id === action.payload._id) {
          return { ...action.payload };
        }
        return habit;
      });
      return [...newHabits];
    }

    case "DELETE_HABIT": {
      console.log("HABIT ID: ", action.payload);
      const newHabits = habits.filter(
        (habit) => habit._id !== action.payload._id
      );
      return [...newHabits];
    }

    default:
      return habits;
  }
};

export default habitsReducer;
