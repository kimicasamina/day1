import axios from "axios";

export const getTags = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/tags");
    dispatch({ type: "GET_TAGS", payload: data.tags });
  } catch (err) {
    console.log(err);
  }
};

export const addTag = (name) => async (dispatch) => {
  try {
    const { data } = await axios.post("/api/tags", { name });
    dispatch({ type: "ADD_TAG", payload: data.tag });
  } catch (err) {
    console.log(err);
  }
};

export const deleteTag = (id) => async (dispatch) => {
  try {
    const { data } = await axios.delete(`api/tags/${id}`);
    dispatch({ type: "DELETE_TAG", payload: data.tag });
  } catch (err) {
    console.log(err);
  }
};
