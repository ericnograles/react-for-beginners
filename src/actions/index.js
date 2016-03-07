import fetch from 'isomorphic-fetch';

export const KEYPRESS_EMAIL = 'KEYPRESS_EMAIL';
export const KEYPRESS_PASSWORD = 'KEYPRESS_PASSWORD';
export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

export function keyPressEmail(email) {
  return {
    type: KEYPRESS_EMAIL,
    email
  };
}

export function keyPressPassword(password) {
  return {
    type: KEYPRESS_PASSWORD,
    password
  }
}

export function requestLogin(email) {
  return {
    type: REQUEST_LOGIN,
    email: email
  };
}

function receiveLogin(email, json) {
  return {
    type: RECEIVE_LOGIN,
    email: email,
    profile: json
  };
}

export function login(email, password) {
  return dispatch => {
    dispatch(requestLogin(email));
    return fetch('http://todo/login/url')
      .then(response => response.json())
      .then(json => dispatch(receiveLogin(email, json)));
  }
}

export function logout() {
  return {
    type: LOGOUT
  };
}