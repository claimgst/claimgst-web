import * as types from '../constants/postsConst';
import { fetchPosts } from '../apis/postsApi';

export const requestPosts = () => {
  return {
    type: types.REQUEST_POSTS
  }
}

export const receivePosts = (posts) => {
  return {
    type: types.RECEIVE_POSTS,
    posts
  }
}

export const loadPosts = (url) => {
  return (dispatch) => {
    dispatch(requestPosts())
    return fetchPosts(url).then(json =>
      dispatch(receivePosts(json))
    )
  }
}