import { expect } from 'chai'
import * as actions from '../../src/actions/authAction';
import * as reducers from '../../src/reducers/authReducer';
import * as types from '../../src/constants/authConst';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6MSwiZW1haWwiOiJzcG9uZGJvYkBlYW1jYS5jb20iLCJjcmVhdGVkX2F0IjoiMjAxNi0wOS0wMlQxMToyMzoxMy4wNzNaIiwidXBkYXRlZF9hdCI6IjIwMTYtMDktMDVUMDU6MTc6NDUuMDU3WiIsImZpcnN0X25hbWUiOiJXYXRzb24iLCJsYXN0X25hbWUiOiJSZWljaGVydCIsInBob25lIjoiKDk4MSkgMTY0LTY5ODkifQ."
const error = {
  status: 403,
  statusText: 'Invalid token'
}

describe('[Redux] - Auth: actions', () => {
  it('should create an action when signing in users', () => {
    const expectedAction = {
      type: types.SIGNIN_USER_REQUEST
    }

    expect(actions.signInUserRequest()).to.deep.equal(expectedAction);
  });

  it('should create an action when signed in users successfully', () => {
    const expectedAction = {
      type: types.SIGNIN_USER_SUCCESS,
      payload:
      {
        token: token
      }
    }

    expect(actions.signInUserSuccess(token)).to.deep.equal(expectedAction);
  });

  it('should create an action when failed to sign in users', () => {
    const expectedAction = {
      type: types.SIGNIN_USER_FAILURE,
      payload: error
    }

    expect(actions.signInUserFailure(error)).to.deep.equal(expectedAction);
  });

  it('should create an action when signing out users', () => {
    const expectedAction = {
      type: types.SIGNOUT_USER
    }

    expect(actions.signOut()).to.deep.equal(expectedAction);
  });
});

describe('[Redux] - Auth: reducers', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
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

    expect(
      reducers.default(undefined, {})
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_USER_REQUEST', () => {
    const expectedReducer = {
      token: null,
      isAuthenticated: false,
      isAuthenticating: true,
      statusText: null,
      user: {
        id: null,
        first_name: null,
        last_name: null,
        email: null
      }
    };

    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_USER_REQUEST
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_USER_SUCCESS', () => {    
    const expectedReducer = {
      token: token,
      isAuthenticated: true,
      isAuthenticating: false,
      statusText: 'You have been successfully logged in.',
      user: {
        id: 1,
        first_name: 'Watson',
        last_name: 'Reichert',
        email: 'spondbob@eamca.com'
      }
    };

    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_USER_SUCCESS,
        payload: {
          token: token
        }
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNIN_USER_FAILURE', () => {
    const expectedReducer = {
      'isAuthenticating': false,
      'isAuthenticated': false,
      'token': null,
      'statusText': 'Authentication Error: 403 Invalid token',
      'user': {
        'id': null,
        'first_name': null,
        'last_name': null,
        'email': null
      }
    }

    expect(
      reducers.default(undefined, {
        type: types.SIGNIN_USER_FAILURE,
        payload: error
      })
    ).to.deep.equal(expectedReducer);
  });

  it('should handle SIGNOUT_USER', () => {
    const expectedReducer = {
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

    expect(
      reducers.default(undefined, {
        type: types.SIGNOUT_USER
      })
    ).to.deep.equal(expectedReducer);
  });
});