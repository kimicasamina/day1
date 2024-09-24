import { combineReducers } from "@reduxjs/toolkit";
import habitsReducer from "./habits/reducers";
import tagsReducer from "./tags/reducers";

const rootReducer = combineReducers({
  habits: habitsReducer,
  tags: tagsReducer,
});

export default rootReducer;
