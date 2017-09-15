import * as actions from './action-types.js';

export function action1(post) {
  return {
    type: actions.ACTION1,
    payload: {
      'name': 'element number',
    },
  }
}
