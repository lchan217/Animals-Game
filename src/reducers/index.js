import { combineReducers } from "redux";
import animalsReducer from "./animalsReducer";
import usersReducer from "./usersReducer";
import goalsReducer from "./goalsReducer.js";

export default combineReducers({
  animals: animalsReducer,
  users: usersReducer,
  goals: goalsReducer
});
