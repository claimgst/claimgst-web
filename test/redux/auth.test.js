import { expect } from 'chai'
import { Map } from 'immutable';
import * as actions from '../../src/actions/authAction';
import * as reducers from '../../src/reducers/authReducer';
import * as types from '../../src/constants/authConst';

describe('[Redux] - Auth: actions', () => {
  it('should create an action when signing in users', () => {
    const expectedAction = {
      type: types.SIGNIN_USER_REQUEST
    }
    expect(actions.signInUserRequest()).to.deep.equal(expectedAction);
  });

  xit('should create an action when signed in users successfully', () => {
    let token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJpZCI6MSwiZW1haWwiOiJzcG9uZGJvYkBlYW1jYS5jb20iLCJjcmVhdGVkX2F0IjoiMjAxNi0wOS0wMlQxMToyMzoxMy4wNzNaIiwidXBkYXRlZF9hdCI6IjIwMTYtMDktMDVUMDU6MTc6NDUuMDU3WiIsImZpcnN0X25hbWUiOiJXYXRzb24iLCJsYXN0X25hbWUiOiJSZWljaGVydCIsInBob25lIjoiKDk4MSkgMTY0LTY5ODkifQ."

    const expectedAction = {
      type: types.SIGNIN_USER_SUCCESS,
      payload:
      {
        token: token
      }
    }
    expect(actions.signInUserSuccess()).to.deep.equal(expectedAction);
  });

  xit('should create an action when failed to sign in users', () => {
    const error = {
      response:
      {
        status: 403,
        statusText: 'Invalid token'
      }
    }

    const expectedAction = {
      type: types.SIGNIN_USER_FAILURE,
      payload:
      {
        status: error.status,
        statusText: error.statusText
      }
    }
    expect(actions.signInUserFailure(error)).to.deep.equal(expectedAction);
  });
});

xdescribe('[Redux] - Auth: reducers', () => {
  it('should return the initial state', () => {
    const expectedReducer = {
      posts: [],
      isFetching: false
    }
    expect(
      reducers.default(undefined, {})
    ).to.deep.equal(expectedReducer);
  });

  it('should handle FETCHING_POSTS', () => {
    const expectedReducer = {
      posts: [],
      isFetching: true
    }
    expect(
      reducers.default(undefined, {
        type: types.FETCHING_POSTS
      })
    ).to.deep.equal(expectedReducer);
  });
});