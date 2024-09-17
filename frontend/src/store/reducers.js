import { combineReducers } from "@reduxjs/toolkit";
import habitsReducer from "./habits/reducers";

const rootReducer = combineReducers({
  habits: habitsReducer,
});

export default rootReducer;
