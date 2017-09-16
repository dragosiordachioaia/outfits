import * as actions from '../actions/action-types';

export default function AuthReducer(state = {}, action) {
  let newState;

  switch(action.type) {
    case actions.REGISTER_USER:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      newState = Object.assign({}, state);
      newState.userCreated = true;
      return newState;
    case actions.LOGIN_USER:
      if(action.error) {
        alert('Sorry, an error has occured');
        return state;
      }
      newState = Object.assign({}, state);
      newState.token = action.payload.data.token;
      newState.username = action.payload.data.username;
      return newState;
    case actions.LOG_OUT:
      newState = Object.assign({}, state);
      newState.token = null;
      newState.username = null;
      return newState;
    default:
      return state;
  }
}
