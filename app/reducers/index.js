import { combineReducers } from 'redux';

// Reducers
import postsReducer from './postsReducer';

// Combine Reducers
const reducers = combineReducers({
    posts: postsReducer
});

export default reducers;