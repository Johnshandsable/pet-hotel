import { combineReducers } from 'redux';
import petsReducer from './pet.reducer';

const rootReducer = combineReducers({
  petsReducer,
});

export default rootReducer;
