
import { combineReducers } from 'redux'
import animal_reducer from './animal_reducer';

 const rootReducer = combineReducers({
    animals: animal_reducer
})

export default rootReducer;
