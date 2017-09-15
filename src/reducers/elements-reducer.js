import * as actions from '../actions/action-types';

export default function ElementsReducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_ELEMENT:
      console.log('ADD_ELEMENT response = ', action);
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      return state.concat(action.payload.data);
    case actions.GET_ALL_ELEMENTS:
      console.log('GET_ALL_ELEMENTS action received, action = ', action);
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
