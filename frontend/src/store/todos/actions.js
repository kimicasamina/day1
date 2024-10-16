import axios from "axios";

export const getTodos = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/todos/user/${userId}`);
    dispatch({ type: "GET_TODOS", payload: data.todos });
  } catch (err) {
    console.log(err);
  }
};

export const addTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/todos/", todo);
    dispatch({ type: "ADD_TODO", payload: data.todo });
  } catch (err) {
    console.log(err);
  }
};

export const editTodo = (id, todo) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/todos/${id}`, todo);
    dispatch({ type: "EDIT_TODO", payload: data.todo });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/todos/${id}`);
    console.log("DATA: ", data);
    dispatch({ type: "DELETE_TODO", payload: data.todo });
  } catch (err) {
    console.log(err);
  }
};

export const checkTodo = (todoId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/todos/${todoId}/check`);
    dispatch({ type: "CHECK_TODO", payload: data.todo });
    return data;
  } catch (err) {
    console.log(err);
  }
};

// export const checkHabit = (habitId) => async (dispatch) => {
//   try {
//     const { data } = await axios.put(`/api/habits/${habitId}/check`);
//     dispatch({ type: "CHECK_HABIT", payload: data.habit });
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
