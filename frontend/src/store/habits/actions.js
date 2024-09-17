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
    console.log("DATA", data);
    dispatch({ type: "ADD_HABIT", payload: data });
  } catch (err) {
    console.log(err);
  }
};
