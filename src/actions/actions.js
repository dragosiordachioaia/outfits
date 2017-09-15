import * as actions from './action-types.js';

import axios from 'axios';

const BASE_URL = '';

export function addElement(name) {
  const promise = axios.post(`${BASE_URL}/element`, {name});
  return {
    type: actions.ADD_ELEMENT,
    payload: promise,
  }
}

export function getAllElements() {
  const promise = axios.get(`${BASE_URL}/elements`);

  return {
    type: actions.GET_ALL_ELEMENTS,
    payload: promise,
  }
}
