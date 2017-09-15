import { combineReducers } from 'redux';
import ElementsReducer from './elements-reducer';

const rootReducer = combineReducers({
  elements: ElementsReducer,
});

export default rootReducer;
