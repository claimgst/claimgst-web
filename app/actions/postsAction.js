import * as types from './actionTypes';

function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

function receivePosts(posts) {
  return {
    type: types.RECEIVE_POSTS,
    posts
  }
}

export function fetchPosts() {
  return function (dispatch) {
    dispatch(requestPosts())
    return fetch(`http://localhost:3000/posts/today`)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}

export function searchPosts(abn, date) {
  return function (dispatch) {
    dispatch(requestPosts())
    return fetch(`http://localhost:3000/posts/search/`+abn+`/`+date)
      .then(response => response.json())
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}