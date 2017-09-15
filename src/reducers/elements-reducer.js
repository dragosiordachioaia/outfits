import * as actions from '../actions/action-types';

export default function ElementsReducer(state = [], action) {
  switch(action.type) {
    case actions.ACTION1:
      const newElement = Object.assign({}, action.payload);
      newElement.id = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
      return state.concat(newElement);
    default:
      return state;
  }
}
