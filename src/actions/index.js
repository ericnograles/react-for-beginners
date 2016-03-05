import fetch from 'isomorphic-fetch';

export const REQUEST_LOGIN = 'REQUEST_LOGIN';
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN';
export const LOGOUT = 'LOGOUT';

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