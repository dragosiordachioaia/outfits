import { combineReducers } from 'redux';
import ElementsReducer from './elements-reducer';
import AuthReducer from './auth-reducer';
import ImagesReducer from './images-reducer';

const rootReducer = combineReducers({
  elements: ElementsReducer,
  auth: AuthReducer,
  images: ImagesReducer,
});

export default rootReducer;
