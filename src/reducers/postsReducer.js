import * as types from '../constants/postsConst';

const initialState = {
  posts: [],
  isFetching: false
};

const postsReducer = function(state = initialState, action) {
  switch(action.type) {
    case types.REQUEST_POSTS:
      return Object.assign(
        {},
        state,
        {
          isFetching: true
        }
      )
    case types.RECEIVE_POSTS:
      return Object.assign(
        {},
        state,
        {
          isFetching: false,
          posts: action.posts
        }
      );
      // let nextState = {}
      // posts = action.posts
      // return Object.assign({}, state, nextState)
  }
  return state;

}

export default postsReducer;