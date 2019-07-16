import { combineReducers } from 'redux'
import animalsReducer from './animalsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  animals: animalsReducer,
  users: usersReducer
})
