import { combineReducers } from "@reduxjs/toolkit";
import habitsReducer from "./habits/reducers";
import tagsReducer from "./tags/reducers";
import todosReducer from "./todos/reducers";
import goalsReducer from "./goals/reducers";

const rootReducer = combineReducers({
  habits: habitsReducer,
  todos: todosReducer,
  tags: tagsReducer,
  goals: goalsReducer,
});

export default rootReducer;
