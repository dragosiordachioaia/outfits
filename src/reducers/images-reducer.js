import * as actions from '../actions/action-types';

export default function AuthReducer(state = [], action) {
  let newState;

  switch(action.type) {
    case actions.ADD_IMAGE:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      let newImage = {
        src: action.payload.data.src,
        type: action.payload.data.type,
      };
      return state.concat(newImage);
    case actions.GET_IMAGES:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      return state.concat(action.payload.data);
    default:
      return state;
  }
}
