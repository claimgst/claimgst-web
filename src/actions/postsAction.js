import * as types from '../constants/postsConst';

const requestPosts = () => {
  return {
    type: types.REQUEST_POSTS
  }
}

const receivePosts = (posts) => {
  return {
    type: types.RECEIVE_POSTS,
    posts
  }
}

export const fetchPosts = (url = 'http://localhost:3000/posts/today') => {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetch(url)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}