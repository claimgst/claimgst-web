import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

// Reducers
import postsReducer from './postsReducer';
import authReducer from './authReducer';

// Combine Reducers
const reducers = combineReducers({
  routing: routerReducer,
  posts: postsReducer,
  auth: authReducer
});

export default reducers;