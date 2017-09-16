import * as actions from '../actions/action-types';

export default function ElementsReducer(state = [], action) {
  switch(action.type) {
    case actions.ADD_ELEMENT:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      return state.concat(action.payload.data);
    case actions.GET_ALL_ELEMENTS:
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
