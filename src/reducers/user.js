import { REQUEST_LOGIN, RECEIVE_LOGIN, LOGOUT } from '../actions';
import * as InitialStates from '../constants/InitialStates';

export function user(state = InitialStates.user, action) {
  switch (action.type) {
    case REQUEST_LOGIN:
      return Object.assign({}, state, {
        email: action.email
      });
    case RECEIVE_LOGIN:
      return Object.assign({}, state, {
        email: action.email,
        profile: action.profile
      });
    case LOGOUT:
      return Object.assign({}, state, {
        email: null,
        profile: null
      });
    default:
      return state;
  }
}