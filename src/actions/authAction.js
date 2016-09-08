import { SIGNIN_USER_REQUEST, SIGNIN_USER_FAILURE, SIGNIN_USER_SUCCESS, SIGNOUT_USER, FETCH_PROTECTED_DATA_REQUEST, RECEIVE_PROTECTED_DATA } from '../constants/authConst';
import { push } from 'react-router-redux';
import jwtDecode from 'jwt-decode';
import * as api from '../apis/authApi';

export const signInUserSuccess = (token) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload: {
      token: token
    }
  }
}

export const signInUserFailure = (error) => {
  return {
    type: SIGNIN_USER_FAILURE,
    payload: {
      status: error.status,
      statusText: error.statusText
    }
  }
}

export const signInUserRequest = () => {
  return {
    type: SIGNIN_USER_REQUEST
  }
}

export const signOut = () => {
  return {
    type: SIGNOUT_USER
  }
}

export const signOutAndRedirect = () => {
  return (dispatch, state) => {
    dispatch(signOut());
    dispatch(push('/'));
  }
}

export const parseJSON = (response) => {
  return response.json()
}

export const signInUser = (email, password, redirect="/dashboard") => {
  return function(dispatch) {
    dispatch(signInUserRequest());
    return api.fetchUser(email, password)
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

export const receiveProtectedData = (data) => {
  return {
    type: RECEIVE_PROTECTED_DATA,
    payload: {
      data: data
    }
  }
}

export const fetchProtectedDataRequest = () => {
  return {
    type: FETCH_PROTECTED_DATA_REQUEST
  }
}

export const fetchProtectedData = (token) => {
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
      if(error.status === 401) {
        dispatch(signInUserFailure(error));
        dispatch(push('/sign_in'));
      }
    })
  }
}