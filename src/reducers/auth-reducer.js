import * as actions from '../actions/action-types';
import Cookies from 'universal-cookie';

export default function AuthReducer(state = {}, action) {
  let newState;
  let cookies;

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

      cookies = new Cookies();
      newState = Object.assign({}, state);

      newState.token = action.payload.data.token;
      newState.username = action.payload.data.username;

      cookies.set('token', newState.token);
      cookies.set('username', newState.username);

      return newState;
    case actions.LOG_OUT:
      cookies = new Cookies();
      newState = Object.assign({}, state);
      newState.token = null;
      newState.username = null;
      cookies.remove('token');
      cookies.remove('username');

      return newState;
    case actions.MARK_AS_LOGGED_IN:
      newState = Object.assign({}, state);
      newState.token = action.payload.token;
      newState.username = action.payload.username;
      return newState;
    default:
      return state;
  }
}
