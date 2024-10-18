const initialValue = [];

const goalsReducer = (goals = initialValue, action) => {
  switch (action.type) {
    case "GET_GOALS": {
      return [...action.payload];
    }

    case "ADD_GOAL": {
      console.log("PAYLOAD:", action.payload);
      return [...goals, action.payload];
    }

    case "EDIT_GOAL": {
      const newGoals = goals.map((goal) => {
        if (goal._id === action.payload._id) {
          return { ...action.payload };
        }
        return goal;
      });
      return [...newGoals];
    }

    case "CHECK_GOAL": {
      const newGoals = goals.map((goal) => {
        if (goal._id === action.payload._id) {
          return { ...action.payload };
        }
        return goal;
      });
      return [...newGoals];
    }

    case "DELETE_GOAL": {
      console.log("GOAL ID: ", action.payload);
      const newGoals = goals.filter((goal) => goal._id !== action.payload._id);
      return [...newGoals];
    }

    default:
      return goals;
  }
};

export default goalsReducer;
