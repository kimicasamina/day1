import axios from "axios";

export const getGoals = (userId) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/api/goals/user/${userId}`);
    dispatch({ type: "GET_GOALS", payload: data.goals });
  } catch (err) {
    console.log(err);
  }
};

export const addGoal = (goal) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/goals", goal);
    dispatch({ type: "ADD_GOAL", payload: data.goal });
  } catch (err) {
    console.log(err);
  }
};

export const editGoal = (id, goal) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/goals/${id}`, goal);
    dispatch({ type: "EDIT_GOAL", payload: data.goal });
  } catch (err) {
    console.log(err);
  }
};

export const deleteGoal = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`/api/goals/${id}`);
    console.log("DATA: ", data);
    dispatch({ type: "DELETE_GOAL", payload: data.goal });
  } catch (err) {
    console.log(err);
  }
};

export const checkGoal = (id) => async (dispatch) => {
  try {
    const { data } = await axios.put(`/api/goals/${id}`, goal);
    dispatch({ type: "CHECK_GOAL", payload: data.goal });
    return data;
  } catch (err) {
    console.log(err);
  }
};
