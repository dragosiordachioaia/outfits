import * as actions from './action-types.js';

import axios from 'axios';

const BASE_URL = '/api';

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

export function registerUser(data) {
  const promise = axios.post(`${BASE_URL}/register`, data);
  return {
    type: actions.REGISTER_USER,
    payload: promise,
  }
}

export function loginUser(data) {
  const promise = axios.post(`${BASE_URL}/login`, data);
  return {
    type: actions.LOGIN_USER,
    payload: promise,
  }
}

export function logOut(data) {
  return {
    type: actions.LOG_OUT,
  }
}

export function addImage(data) {
  const promise = axios.post(`${BASE_URL}/image`, data);

  return {
    type: actions.ADD_IMAGE,
    payload: promise,
  }
}

export function getImages() {
  const promise = axios.get(`${BASE_URL}/images`);

  return {
    type: actions.GET_IMAGES,
    payload: promise,
  }
}
