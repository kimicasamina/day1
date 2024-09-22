import axios from "axios";

export const getHabits = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/habits");
    dispatch({ type: "GET_HABITS", payload: data.habits });
  } catch (err) {
    console.log(err);
  }
};

export const addHabit = (habit) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/habits/create", habit);
    dispatch({ type: "ADD_HABIT", payload: data });
  } catch (err) {
    console.log(err);
  }
};

export const editHabit = (id, habit) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/habits/${id}/update`, habit);
    dispatch({ type: "EDIT_HABIT", payload: data.habit });
  } catch (err) {
    console.log(err);
  }
};

export const deleteHabit = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/habits/${id}/delete`);
    console.log("DATA: ", data);
    dispatch({ type: "DELETE_HABIT", payload: data.habit });
  } catch (err) {
    console.log(err);
  }
};

export const checkHabit = (habitId) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/habits/${habitId}/check`);
    dispatch({ type: "CHECK_HABIT", payload: data.habit });
    return data;
  } catch (err) {
    console.log(err);
  }
};
