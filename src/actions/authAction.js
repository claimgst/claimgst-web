import { SIGNIN_USER_REQUEST, SIGNIN_USER_FAILURE, SIGNIN_USER_SUCCESS, SIGNOUT_USER, FETCH_PROTECTED_DATA_REQUEST, RECEIVE_PROTECTED_DATA } from '../constants/authConst';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import { fetchUser } from '../apis/authApi';

export function signInUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export function signInUserFailure(error) {
  localStorage.removeItem('token');
  return {
    type: SIGNIN_USER_FAILURE,
    payload: {
      status: error.response.status,
      statusText: error.response.statusText
    }
  }
}

export function signInUserRequest() {
  return {
    type: SIGNIN_USER_REQUEST
  }
}

export function signOut() {
  localStorage.removeItem('token');
  return {
    type: SIGNOUT_USER
  }
}

export function signOutAndRedirect() {
  return (dispatch, state) => {
    dispatch(signOut());
    dispatch(push('/'));
  }
}

export function parseJSON(response) {
  return response.json()
}

export function signInUser(email, password, redirect="/dashboard") {
  return function(dispatch) {
    dispatch(signInUserRequest());
    return fetchUser(email, password)
    // .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      try {
        let decoded = jwtDecode(response.token);
        dispatch(signInUserSuccess(response.token));
        dispatch(push(redirect));
      } catch (e) {
        dispatch(signInUserFailure({
          response: {
            status: 403,
            statusText: 'Invalid token'
          }
        }));
      }
    })
    .catch(error => {
      dispatch(signInUserFailure(error));
    })
  }
}

export function receiveProtectedData(data) {
  return {
    type: RECEIVE_PROTECTED_DATA,
    payload: {
      data: data
    }
  }
}

export function fetchProtectedDataRequest() {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST
  }
}

export function fetchProtectedData(token) {

  return (dispatch, state) => {
    dispatch(fetchProtectedDataRequest());
    return fetch('http://localhost:3000/getData/', {
      credentials: 'include',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    // .then(checkHttpStatus)
    .then(parseJSON)
    .then(response => {
      dispatch(receiveProtectedData(response.data));
    })
    .catch(error => {
      if(error.response.status === 401) {
        dispatch(signInUserFailure(error));
        dispatch(push('/sign_in'));
      }
    })
  }
}