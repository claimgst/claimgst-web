import { SIGNIN_USER_REQUEST, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE, SIGNOUT_USER } from '../constants/authConst';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: null,
  user: {
    id: null,
    first_name: null,
    last_name: null,
    email: null
  }
};

const authReducer = function(state = initialState, action) {
  switch(action.type) {
    case SIGNIN_USER_REQUEST:
      return Object.assign(
        {},
        state,
        {
          'isAuthenticating': true,
          'statusText': null
        }
      )
    case SIGNIN_USER_SUCCESS:
      let decoded = jwtDecode(action.payload.token);
      return Object.assign(
        {},
        state,
        {
          'isAuthenticating': false,
          'isAuthenticated': true,
          'token': action.payload.token,
          'statusText': 'You have been successfully logged in.',
          'user': {
            'id': decoded.id,
            'first_name': decoded.first_name,
            'last_name': decoded.last_name,
            'email': decoded.email,
          }
        }
      )
    case SIGNIN_USER_FAILURE:
      return Object.assign(
        {},
        state,
        {
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'statusText': `Authentication Error: ${action.payload.status} ${action.payload.statusText}`,
          'user': {
            'id': null,
            'first_name': null,
            'last_name': null,
            'email': null
          }
        }
      )
    case SIGNOUT_USER:
      return Object.assign(
        {},
        state,
        {
          'isAuthenticating': false,
          'isAuthenticated': false,
          'token': null,
          'statusText': 'You have been successfully logged out.',
          'user': {
            'id': null,
            'first_name': null,
            'last_name': null,
            'email': null
          }
        }
      )
  }
  return state;
}

export default authReducer;