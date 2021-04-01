import { combineReducers } from 'redux';
import petsReducer from './pet.reducer';
import ownerReducer from './owner.reducer';

const rootReducer = combineReducers({
  petsReducer,
  ownerReducer,
});

export default rootReducer;
