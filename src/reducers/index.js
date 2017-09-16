import { combineReducers } from 'redux';
import ElementsReducer from './elements-reducer';
import AuthReducer from './auth-reducer';

const rootReducer = combineReducers({
  elements: ElementsReducer,
  auth: AuthReducer,
});

export default rootReducer;
