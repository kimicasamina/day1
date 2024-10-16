const initialValue = [];

const todosReducer = (todos = initialValue, action) => {
  switch (action.type) {
    case "GET_TODOS": {
      return [...action.payload];
    }

    case "ADD_TODO": {
      console.log("PAYLOAD:", action.payload);
      return [...todos, action.payload];
    }

    case "EDIT_TODO": {
      const newTodos = todos.map((todo) => {
        if (todo._id === action.payload._id) {
          return { ...action.payload };
        }
        return todo;
      });
      return [...newTodos];
    }

    // case "CHECK_HABIT": {
    //   const newHabits = habits.map((habit) => {
    //     if (habit._id === action.payload._id) {
    //       return { ...action.payload };
    //     }
    //     return habit;
    //   });
    //   return [...newHabits];
    // }

    case "DELETE_TODO": {
      console.log("TODO ID: ", action.payload);
      const newTodos = todos.filter((todo) => todo._id !== action.payload._id);
      return [...newTodos];
    }

    default:
      return todos;
  }
};

export default todosReducer;
